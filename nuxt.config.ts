// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  site: {
    url: "https://paillechoux.fr",
  },
  ssr: true,
  devtools: { enabled: true },
  modules: [
    "nuxt-svgo",
    "@nuxt/image",
    "nuxt-simple-robots",
    "nuxt-simple-sitemap",
  ],
  svgo: {
    defaultImport: "component",
  },
  image: {},
});
