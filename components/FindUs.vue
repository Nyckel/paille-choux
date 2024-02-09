<template>
  <ContentRenderer id="find-us" :value="findUs" tag="section" />

  <!-- <section id="find-us"> -->
  <!-- <h1>Où nous trouver ?</h1>

    <div class="content">
      <div class="text-map">
        <p>
          La ferme est située à la <b>Grande Piedvachais</b>:<br />
          507 route de vignoc<br />
          35630 - Langouët<br />
        </p>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2656.6695490537336!2d-1.8149741!3d48.2514883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480eef101f8bad59%3A0xeafcc88b6dc8b5b1!2sPaillechoux!5e0!3m2!1sfr!2sfr!4v1696003800238!5m2!1sfr!2sfr"
          height="450"
          style="border: 0"
          allowfullscreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div class="images">
        <nuxt-img src="images/maison.webp" alt="La maison" />
        <nuxt-img src="images/serres.webp" alt="Les serres" />
      </div>
    </div> -->
  <!-- </section> -->
</template>
<style lang="scss">
@import "../globals.scss";

#find-us {
  margin: 0 auto;
  max-width: 1000px;
  margin-top: 5rem;
  padding: 0 2rem;

  h1 {
    color: $main-green;
  }

  iframe {
    width: 100%;
    border-radius: 15px;
  }

  img {
    min-width: 200px;
    max-width: 100%;
    margin-top: 1rem;

    &:first-of-type {
      margin-right: 1rem;
    }
  }
}
</style>
<script setup lang="ts">
const { data: findUs } = await useAsyncData('find-us', () => queryContent('landing/find-us').findOne());
</script>