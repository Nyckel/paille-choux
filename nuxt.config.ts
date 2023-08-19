// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  nitro: {
    preset: "netlify",
  },
  devtools: { enabled: true },
  modules: ["nuxt-svgo"],
  svgo: {
    defaultImport: "component",
  },
});
