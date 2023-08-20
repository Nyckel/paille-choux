<template>
  <Head>
    <Title>{{ seo.title }}</Title>
    <Meta name="description" :content="seo.title" />
  </Head>

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
<script setup>
import ChouxIcon from "assets/Choux.svg";
import CarotteIcon from "assets/Carotte.svg";
import NavetIcon from "assets/Navet.svg";

const seo = {
  title: "Paille Choux",
  description:
    "Paille-Choux est une ferme installée en maraîchage à Langouët en 2023.",
};

useHead({
  htmlAttrs: {
    lang: "fr",
  },
  title: seo.title,
  description: seo.description,
});
</script>
