import { ref } from "vue";
import { defineStore } from "pinia";
import Cookies from "js-cookie";

export const useAuthStore = defineStore("auth", () => {
  const isLoggedIn = ref(false);
  const user = ref("Daptee");
  const PASSWORD = ref("Daptee2024");

  function login(username: string, password: string, redirect: () => void) {
    if (username === user.value && password === PASSWORD.value) {
      isLoggedIn.value = true;
      Cookies.set("isLoggedIn", "true", { expires: 1 });
      console.log("Login successful");
      redirect();
    } else {
      alert("Invalid credentials");
    }
  }

  function checkLogin() {
    const loggedIn = Cookies.get("isLoggedIn");
    isLoggedIn.value = loggedIn === "true";
    console.log("Checked login status:", isLoggedIn.value);
  }

  function logout(redirect: () => void) {
    isLoggedIn.value = false;
    Cookies.remove("isLoggedIn");
    console.log("Logged out");
    redirect();
  }

  return { isLoggedIn, user, login, checkLogin, logout };
});
