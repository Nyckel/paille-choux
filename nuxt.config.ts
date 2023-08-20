// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  modules: ["nuxt-svgo", "@nuxt/image"],
  svgo: {
    defaultImport: "component",
  },
});
