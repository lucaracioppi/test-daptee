import type { NuxtConfig } from "@nuxt/types";

const config: NuxtConfig = {
  buildModules: ["@nuxt/typescript-build"],
  modules: ["@pinia/nuxt"],
  css: ["~/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
};

export default config;
