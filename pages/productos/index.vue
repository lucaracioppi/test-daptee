<script lang="ts" setup>
import { ref, onBeforeMount, watch } from "vue";
import { useSearchStore } from "~/stores/searchStore";
import { useAuthStore } from "~/stores/auth";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import type { Product } from "~/types/types";
import ProductCard from "./components/ProductCard.vue";
import ProductModal from "./components/ProductModal.vue";
import Loading from "../../components/Loading.vue";

const searchStore = useSearchStore();
const authStore = useAuthStore();
const { filteredProducts } = storeToRefs(searchStore);

const selectedProduct = ref<Product | null>(null);
const isModalVisible = ref(false);
const isLoading = ref(true);
const isEmpty = ref(false);

const router = useRouter();

const fetchProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data: Product[] = await response.json();
    searchStore.products = data;
  } catch (error) {
    console.error("Error fetching products:", error);
  } finally {
    isLoading.value = false;
  }
};

const showModal = (product: Product) => {
  selectedProduct.value = product;
  isModalVisible.value = true;
};

const handleDelete = (productId: number) => {
  searchStore.products = searchStore.products.filter(
    (product) => product.id !== productId
  );
};

const closeModal = () => {
  isModalVisible.value = false;
  selectedProduct.value = null;
};

watch(filteredProducts, () => {
  if (filteredProducts.value.length === 0) {
    isEmpty.value = true;
  } else {
    isEmpty.value = false;
  }
});

onBeforeMount(() => {
  authStore.checkLogin();
  if (!authStore.isLoggedIn) {
    router.push("/login");
  } else {
    fetchProducts();
  }
  searchStore.search = "";
});
</script>

<template>
  <div class="w-full min-h-screen h-full bg-white dark:bg-gray-950">
    <div v-show="isEmpty" class="mt-32 flex justify-center w-full">
      <div
        class="flex items-center justify-center w-96 h-36 bg-gray-200 dark:bg-gray-800 rounded-xl"
      >
        <p class="text-2xl font-bold text-black dark:text-white">
          No hay más productos
        </p>
      </div>
    </div>
    <div v-if="isLoading">
      <Loading />
    </div>
    <div v-else class="p-6 mt-16 mx-auto">
      <div class="flex justify-center">
        <div
          class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6"
        >
          <ProductCard
            v-for="product in filteredProducts"
            :key="product.id"
            :product="product"
            @view-more="showModal"
            @delete="handleDelete"
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
