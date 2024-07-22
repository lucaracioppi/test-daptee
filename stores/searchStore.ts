import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { Product } from "~/types/types";
import type { User } from "~/types/types";

export const useSearchStore = defineStore("search", () => {
  const search = ref("");
  const products = ref<Product[]>([]);
  const users = ref<User[]>([]);

  const filteredProducts = computed(() => {
    if (!search.value) return products.value;
    return products.value.filter((product) =>
      product.title.toLowerCase().includes(search.value.toLowerCase())
    );
  });

  const filteredUsers = computed(() => {
    if (!search.value) return users.value;
    return users.value.filter((user) =>
      user.name.toLowerCase().includes(search.value.toLowerCase())
    );
  });

  return { search, products, users, filteredProducts, filteredUsers };
});
