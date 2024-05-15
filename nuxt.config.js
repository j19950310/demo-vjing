// https://nuxt.com/docs/api/configuration/nuxt-config

const isProduction = process.env.NODE_ENV === "production";
console.log("isProduction", isProduction);
export default defineNuxtConfig({
  ssr: false,
  nitro: {
    baseURL: isProduction ? "https://j19950310.github.io/demo-vjing/" : "/",
    prerender: {
      crawlLinks: true,
      failOnError: false, 
    },
  },
  devtools: { enabled: true },
  modules: ["@vueuse/nuxt"],
  app: {
    baseURL: isProduction ? "https://j19950310.github.io/demo-vjing/" : "/",
  }
});
