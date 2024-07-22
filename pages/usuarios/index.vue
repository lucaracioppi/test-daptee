<script lang="ts" setup>
import { ref, onBeforeMount, watch } from "vue";
import type { User } from "../../types/types";
import { useSearchStore } from "~/stores/searchStore";
import { useAuthStore } from "~/stores/auth";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import UserCard from "./components/UserCard.vue";
import UserModal from "./components/UserModal.vue";
import Loading from "../../components/Loading.vue";

const searchStore = useSearchStore();
const authStore = useAuthStore();
const { filteredUsers } = storeToRefs(searchStore);

const selectedUser = ref<User | null>(null);
const isModalVisible = ref(false);
const isLoading = ref(true);
const isEmpty = ref(false);

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

watch(filteredUsers, () => {
  if (filteredUsers.value.length === 0) {
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
    fetchUsers();
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
          No hay más usuarios
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
          <UserCard
            v-for="user in filteredUsers"
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
