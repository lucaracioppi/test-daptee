<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";
import type { User } from "../../../types/types";

const props = defineProps<{ user: User | null }>();

const emit = defineEmits<{
  (e: "close"): void;
}>();
</script>

<template>
  <div
    class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
  >
    <div
      class="relative bg-white dark:bg-slate-700 p-6 rounded-lg shadow-lg w-11/12 max-w-md"
    >
      <button
        @click="$emit('close')"
        class="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-600 rounded-lg text-sm p-1.5"
        aria-label="Close"
      >
        <svg
          class="w-6 h-6 text-gray-500 dark:text-gray-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        {{ props.user?.name }}
      </h2>
      <p class="text-gray-900 dark:text-gray-300">
        <strong>Address:</strong> {{ props.user?.address.street }},
        {{ props.user?.address.suite }}, {{ props.user?.address.city }},
        {{ props.user?.address.zipcode }}
      </p>
      <p class="text-gray-900 dark:text-gray-300">
        <strong>Phone:</strong> {{ props.user?.phone }}
      </p>
      <p class="text-gray-900 dark:text-gray-300">
        <strong>Website:</strong> {{ props.user?.website }}
      </p>
    </div>
  </div>
</template>
