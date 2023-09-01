// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  site: {
    url: "https://paillechoux.fr",
    name: "Paille Choux",
    $dev: {
      url: "http://localhost:3000",
      name: "Paille Choux DEV",
    },
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
  sitemap: {},
  robots: {
    allow: ["/"],
    credits: false,
  },
});
