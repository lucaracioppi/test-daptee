<script lang="ts" setup>
import { ref, onMounted } from "vue";
import UserCard from "./components/UserCard.vue";
import UserModal from "./components/UserModal.vue";
import type { User } from "../../types/types";

const users = ref<User[]>([]);
const selectedUser = ref<User | null>(null);
const isModalOpen = ref(false);

const fetchUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data: User[] = await response.json();
    users.value = data;
    console.log("Users fetched:", users.value);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

const openModal = (user: User) => {
  selectedUser.value = user;
  isModalOpen.value = true;
};

const closeModal = () => {
  selectedUser.value = null;
  isModalOpen.value = false;
};

const handleDelete = (userId: number) => {
  users.value = users.value.filter((user) => user.id !== userId);
};

onMounted(fetchUsers);
</script>

<template>
  <div class="w-full h-full bg-white dark:bg-gray-950">
    <div class="p-6 max-w-7xl mx-auto">
      <h1 class="text-3xl font-bold mb-6 text-center text-gray-800">
        Usuarios
      </h1>
      <div class="flex justify-center">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <UserCard
            v-for="user in users"
            :key="user.id"
            :user="user"
            @view-more="openModal"
            @delete="handleDelete"
          />
        </div>
      </div>
    </div>
    <UserModal v-if="isModalOpen" :user="selectedUser" @close="closeModal" />
  </div>
</template>
