<!-- components/ProductCard.vue -->
<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps<{
  product: {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
    category: string;
  };
}>();

const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const viewMore = () => {
  emit("view-more", props.product);
  isDropdownOpen.value = false;
};

const deleteCard = () => {
  alert("Borrar clicked!");
  isDropdownOpen.value = false;
};

const emit = defineEmits<{
  (e: "view-more", product: typeof props.product): void;
}>();
</script>

<template>
  <div
    class="w-full h-fit max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative"
  >
    <div class="h-60 aspect-w-1 aspect-h-1">
      <img
        class="object-contain w-full h-full p-2"
        :src="product.image"
        :alt="product.title"
      />
    </div>

    <div class="h-auto px-5 pb-5 rounded-b-lg bg-white dark:bg-slate-700">
      <h5
        class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate"
      >
        {{ product.title }}
      </h5>
      <div class="flex items-center mt-2.5 mb-5">
        <div class="flex items-center space-x-1 rtl:space-x-reverse">
          <template v-for="i in 5" :key="i">
            <svg
              v-if="i <= Math.floor(product.rating.rate)"
              class="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path
                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
              />
            </svg>
            <svg
              v-else
              class="w-4 h-4 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path
                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
              />
            </svg>
          </template>
        </div>
        <span
          class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3"
        >
          {{ product.rating.rate }}
        </span>
      </div>
      <div class="flex items-center justify-between relative">
        <span class="text-3xl font-bold text-gray-900 dark:text-white"
          >${{ product.price }}</span
        >
        <button
          @click="toggleDropdown"
          class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-600 rounded-lg text-sm p-1.5"
        >
          <span class="sr-only">Open dropdown</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 3"
          >
            <path
              d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
            />
          </svg>
        </button>
        <!-- Dropdown menu -->
        <div
          v-if="isDropdownOpen"
          class="z-10 absolute left-8 mt-2 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-800"
        >
          <ul class="py-2">
            <li>
              <a
                @click="viewMore"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200 dark:hover:text-white"
                >Ver más</a
              >
            </li>
            <li>
              <a
                @click="deleteCard"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200 dark:hover:text-white"
                >Borrar</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
