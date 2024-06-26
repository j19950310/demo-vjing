// https://nuxt.com/docs/api/configuration/nuxt-config

const isProduction = process.env.NODE_ENV === "production";
console.log("isProduction", isProduction);

export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: ["@vueuse/nuxt"],
  app: {
    baseURL: isProduction ? "/demo-vjing/" : "/",
  }
});
