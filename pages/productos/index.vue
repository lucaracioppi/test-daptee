<!-- components/ParentComponent.vue -->
<script lang="ts" setup>
import { ref, onMounted } from "vue";
import type { Product } from "../../types/types";
import ProductCard from "./components/ProductCard.vue";
import ProductModal from "./components/ProductModal.vue";

const products = ref<Product[]>([]);
const selectedProduct = ref<Product | null>(null);
const isModalVisible = ref(false);

const fetchProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data: Product[] = await response.json();
    products.value = data;
    console.log("Products fetched:", products.value);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

const showModal = (product: Product) => {
  selectedProduct.value = product;
  isModalVisible.value = true;
};

const closeModal = () => {
  isModalVisible.value = false;
  selectedProduct.value = null;
};

onMounted(fetchProducts);
</script>

<template>
  <div class="w-full h-full bg-white dark:bg-gray-950">
    <div class="p-6 max-w-7xl mx-auto">
      <h1 class="text-3xl font-bold mb-6 text-center text-gray-700">
        Productos
      </h1>
      <div class="flex justify-center">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <ProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
            @view-more="showModal"
          />
        </div>
      </div>
    </div>
    <ProductModal
      v-if="isModalVisible"
      :product="selectedProduct"
      @close="closeModal"
    />
  </div>
</template>
