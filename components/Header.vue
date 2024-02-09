<style scoped lang="scss">
@import "../globals.scss";

.header {
  .bg {
    fill: $transparent-green;
    position: absolute;
    z-index: 1;
  }

  .content {
    z-index: 2;
    position: relative;
  }
}

.bio-logo {
  position: absolute;
  right: 1rem;
  top: 1rem;
  max-width: 20%;
}

.logo-zone {
  display: flex;
  flex-direction: column;
  align-items: center;

  #headerLogo {
    margin-top: 5rem;
    height: auto;
    width: 60%;
    color: unset;
    max-width: 1000px;
  }

  .logo {
    width: 40%;
    height: unset;
    color: $main-green;
  }

  .subtitle {
    margin-top: 1rem;
    width: auto;
    color: $main-green;
  }
}

#intro {
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 3rem;
  display: flex;
  align-items: center;
  margin-bottom: -2rem;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 2rem;

  p {
    min-width: 400px;
    padding: 1rem;
    flex: 1;
  }

  @media screen and (max-width: 500px) {
    p {
      min-width: unset;
    }

    img {
      max-width: 90%;
    }
  }
}
</style>

<template>
  <div class="header">
    <svg class="bg" viewBox="0 0 1920 713" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M2210 0H-290V452C-290 595.633 269.644 712.071 960 712.071C1650.36 712.071 2210 595.633 2210 452V0Z"
        fill="#29914D" fill-opacity="0.1" />
    </svg>
    <div class="content">
      <nuxt-img class="bio-logo" src="images/AB.webp" alt="Logo AB" />
      <div class="logo-zone">
        <LogoComplet id="headerLogo" :class="{ 'nuxt-icon--fill': false }" />
        <section id="intro">
          <nuxt-img src="images/thomas.webp" alt="Thomas Helbert" />
          <ContentRenderer :value="data" tag="p" />
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LogoComplet from "../assets/LogoComplet.svg";

const { data } = await useAsyncData('intro', () => queryContent('landing/intro').findOne());
</script>
