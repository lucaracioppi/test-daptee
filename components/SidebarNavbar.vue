<script setup>
import { ref } from "vue";

const showSidebar = ref(false);
const showUserDropdown = ref(false);

const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value;
};

const toggleUserDropdown = () => {
  showUserDropdown.value = !showUserDropdown.value;
};

const handleSearch = (event) => {
  setSearchTerm(event.target.value);
};
</script>

<template>
  <nav
    class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-start rtl:justify-end">
          <button
            @click="toggleSidebar"
            aria-controls="logo-sidebar"
            type="button"
            class="inline-flex items-center mr-2 p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span class="sr-only">Open sidebar</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
          <div class="flex md:me-24">
            <img src="/public/images/logo-Daptee.svg" class="h-12" />
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <div class="relative">
            <input
              type="search"
              @input="handleSearch"
              placeholder="Buscar..."
              class="block w-full p-2 pl-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
          </div>
          <div class="flex items-center ms-3">
            <div class="flex flex-row gap-4 items-center">
              <p class="text-sm text-gray-500 dark:text-gray-400">
                Nombre de usuario
              </p>
              <button
                type="button"
                class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                aria-expanded="false"
                @click="toggleUserDropdown"
              >
                <span class="sr-only">Open user menu</span>
                <img
                  class="w-8 h-8 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  alt="user photo"
                />
              </button>
            </div>
            <div
              v-if="showUserDropdown"
              class="z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600 absolute right-8 top-8"
            >
              <ul class="py-1" role="none">
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                    >Mi cuenta</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                    >Cerrar sesión</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <aside
    id="logo-sidebar"
    class="fixed top-0 left-0 z-40 w-48 h-screen pt-20 mt-2 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
    :class="{ '-translate-x-full': !showSidebar, 'translate-x-0': showSidebar }"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
        <li>
          <NuxtLink
            to="/productos"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <svg
              class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 21"
            >
              <path
                d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"
              />
              <path
                d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"
              />
            </svg>
            <span class="ms-3">Productos</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/usuarios"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <svg
              class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path
                d="M9 10.75A2.25 2.25 0 1 0 9 6a2.25 2.25 0 0 0 0 4.5ZM6 10a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z"
              />
              <path
                d="M8.99 2.25a7.68 7.68 0 0 0-6.86 4.18.75.75 0 0 0 1.3.75A6.18 6.18 0 0 1 9 3.75h.01a6.18 6.18 0 0 1 5.55 3.43.75.75 0 0 0 1.3-.75 7.68 7.68 0 0 0-6.86-4.18h-.01ZM9 15.25a6.19 6.19 0 0 1-5.55-3.43.75.75 0 1 0-1.3.75A7.68 7.68 0 0 0 9 16.25h.01a7.68 7.68 0 0 0 6.86-4.18.75.75 0 1 0-1.3-.75A6.19 6.19 0 0 1 9 15.25H8.99Z"
              />
              <path
                d="M5.21 12.85a.75.75 0 0 0-1.05-.14 6.15 6.15 0 0 0-1.41 1.41.75.75 0 1 0 1.23.91 4.67 4.67 0 0 1 1.07-1.07.75.75 0 0 0 .14-1.05ZM14.84 6.03a.75.75 0 0 0 1.05.14 6.15 6.15 0 0 0 1.41-1.41.75.75 0 0 0-1.23-.91 4.67 4.67 0 0 1-1.07 1.07.75.75 0 0 0-.14 1.05Z"
              />
              <path
                d="M16.56 12.85a.75.75 0 0 0-1.05.14 4.67 4.67 0 0 1-1.07 1.07.75.75 0 1 0 .91 1.23 6.15 6.15 0 0 0 1.41-1.41.75.75 0 0 0-.14-1.05ZM3.16 6.03a.75.75 0 1 0-1.05-.14 6.15 6.15 0 0 0-1.41 1.41.75.75 0 1 0 1.23.91A4.67 4.67 0 0 1 3.23 6.17a.75.75 0 0 0-.14-1.05Z"
              />
            </svg>
            <span class="flex-1 ms-3 whitespace-nowrap">Usuarios</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </aside>
</template>
