// https://nuxt.com/docs/api/configuration/nuxt-config

const isProduction = process.env.NODE_ENV === "production";
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@vueuse/nuxt"],
  app: {
    baseURL: isProduction ? "https://j19950310.github.io/demo-vjing/" : "/",
  }
});
