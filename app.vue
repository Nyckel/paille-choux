<template>
  <ChouxIcon id="static-choux" class="static" />
  <CarotteIcon id="static-carotte" class="static" />
  <NavetIcon id="static-navet" class="static" />

  <div id="pageContent">
    <ClientOnly>
      <NavBar />
    </ClientOnly>
    <Header />
    <MSV />
    <FindOurProducts />
    <FindUs />
    <Footer />
  </div>
</template>

<style lang="scss">
@import "./app.scss";
@import "./globals.scss";
</style>
<style scoped lang="scss">
#pageContent {
  z-index: 10;
  position: relative;
}

.static {
  position: absolute;
  filter: opacity(10%);
  transform-box: fill-box;
  transform-origin: center;
  z-index: 0;
}

#static-choux {
  top: 900px;
  left: -300px;
  width: 600px;
  transform: rotate(45deg);
}

#static-carotte {
  top: 1300px;
  right: -320px;
  width: 800px;
}

#static-navet {
  bottom: 600px;
  width: 800px;
  transform: rotate(14deg);
  left: 100px;
}
</style>
<script setup lang="ts">
import ChouxIcon from "assets/Choux.svg";
import CarotteIcon from "assets/Carotte.svg";
import NavetIcon from "assets/Navet.svg";

const seo = {
  title: "Paille Choux",
  description:
    "Paille-Choux est une ferme installée en maraîchage à Langouët au nord de Rennes. Thomas Helbert y pratique le maraîchage BIO en MSV.",
  url: "paillechoux.fr",
  locale: "fr_FR",
  color: "#00584b",
  image: {
    url: "https://paillechoux.fr/_ipx/_/images/maison.webp",
    width: 438,
    height: 269,
    alt: "Devant la ferme",
  },
};

useHead({
  htmlAttrs: {
    lang: "fr",
  },
  title: seo.title,
  meta: [
    {
      name: "description",
      content: seo.description,
    },
  ],
});
useSeoMeta({
  title: seo.title,
  description: seo.description,
  author: "Thomas HELBERT",
  applicationName: seo.title,
  creator: "Mathis OUARNIER",
  publisher: "Mathis OUARNIER",
  robots: {
    all: true,
  },
  ogUrl: seo.url,
  ogTitle: seo.title,
  ogDescription: seo.description,
  ogType: "website",
  ogLocale: seo.locale,
  twitterCard: "summary",
  twitterTitle: seo.title,
  twitterDescription: seo.description,
  twitterImage: {
    ...seo.image,
  },
  twitterSite: seo.url,
  themeColor: seo.color,
  mobileWebAppCapable: "yes",
  appleMobileWebAppCapable: "yes",
  appleMobileWebAppStatusBarStyle: "black",
  appleMobileWebAppTitle: seo.title,
  msapplicationTileImage: seo.image.url,
  msapplicationTileColor: seo.color,
});
defineRobotMeta();
</script>
