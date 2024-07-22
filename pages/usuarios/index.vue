<script lang="ts" setup>
import { ref, onBeforeMount } from "vue";
import type { User } from "../../types/types";
import { useSearchStore } from "~/stores/searchStore";
import { useAuthStore } from "~/stores/auth";
import { useRouter } from "vue-router";
import UserCard from "./components/UserCard.vue";
import UserModal from "./components/UserModal.vue";
import Loading from "../../components/Loading.vue";

const searchStore = useSearchStore();
const authStore = useAuthStore();
const selectedUser = ref<User | null>(null);
const isModalVisible = ref(false);
const isLoading = ref(true);

const router = useRouter();

const fetchUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data: User[] = await response.json();
    searchStore.users = data;
  } catch (error) {
    console.error("Error fetching users:", error);
  } finally {
    isLoading.value = false;
  }
};

const showModal = (user: User) => {
  selectedUser.value = user;
  isModalVisible.value = true;
};

const handleDelete = (userId: number) => {
  searchStore.users = searchStore.users.filter((user) => user.id !== userId);
};

const closeModal = () => {
  isModalVisible.value = false;
  selectedUser.value = null;
};

onBeforeMount(() => {
  authStore.checkLogin();
  if (!authStore.isLoggedIn) {
    router.push("/login");
  } else {
    fetchUsers();
  }
  searchStore.search = "";
});
</script>

<template>
  <div class="w-full min-h-screen h-full bg-white dark:bg-gray-950">
    <div v-if="isLoading">
      <Loading />
    </div>
    <div v-else class="p-6 mt-16 mx-auto">
      <div class="flex justify-center">
        <div
          class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6"
        >
          <UserCard
            v-for="user in searchStore.filteredUsers"
            :key="user.id"
            :user="user"
            @view-more="showModal"
            @delete="handleDelete"
          />
        </div>
      </div>
    </div>
    <UserModal v-if="isModalVisible" :user="selectedUser" @close="closeModal" />
  </div>
</template>
