<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "~/stores/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const authStore = useAuthStore();
const username = ref("");
const password = ref("");

const handleSubmit = () => {
  authStore.login(username.value, password.value, () =>
    router.push("/productos")
  );
};

onBeforeMount(() => {
  authStore.checkLogin();
  if (authStore.isLoggedIn) {
    router.push("/productos");
  }
});
</script>
<template>
  <form class="space-y-6" @submit.prevent="handleSubmit">
    <div>
      <label
        for="username"
        class="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-400"
        >Username</label
      >
      <div class="mt-2">
        <input
          id="username"
          name="username"
          type="text"
          v-model="username"
          autocomplete="username"
          class="block w-full bg-gray-900 rounded-md border-0 px-2 py-1.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>

    <div>
      <div class="flex items-center justify-between">
        <label
          for="password"
          class="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-400"
          >Password</label
        >
        <div class="text-sm">
          <a
            href="#"
            class="font-semibold text-violet-500 hover:text-violet-600"
            >Forgot password?</a
          >
        </div>
      </div>
      <div class="mt-2">
        <input
          id="password"
          name="password"
          type="password"
          v-model="password"
          autocomplete="current-password"
          class="block w-full bg-gray-900 rounded-md border-0 px-2 py-1.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>

    <div>
      <button
        type="submit"
        class="flex w-full justify-center rounded-md bg-violet-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-violet-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Sign in
      </button>
    </div>
  </form>
</template>
