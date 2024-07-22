<script setup>
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { onBeforeMount } from "vue";
import Loading from "@/components/Loading.vue";

definePageMeta({
  layout: "false",
});

const router = useRouter();
const authStore = useAuthStore();

onBeforeMount(() => {
  authStore.checkLogin();
  if (!authStore.isLoggedIn) {
    router.push("/login");
  } else {
    router.push("/productos");
  }
});
</script>

<template>
  <div class="bg-white dark:bg-gray-950">
    <Loading />
  </div>
</template>
