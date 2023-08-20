<template>
  <section id="find-us">
    <h1>Où nous trouver ?</h1>

    <div class="content">
      <div class="text-map">
        <p>
          La ferme est située à la <b>Grande Piedvachais</b>:<br />
          507 route de vignoc<br />
          35630 - Langouët<br />
        </p>

        <iframe
          title="Nous trouver sur la carte"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2656.6790750213227!2d-1.8175100229505419!3d48.25130494323603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480eef1640608697%3A0xeef61fd0b897e415!2sLa%20Grande%20Piedevachais%2C%2035630%20Langouet!5e0!3m2!1sfr!2sfr!4v1691587523705!5m2!1sfr!2sfr"
          height="450"
          style="border: 0"
          allowfullscreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div class="images">
        <nuxt-img src="images/maison.png" alt="La maison" />
        <nuxt-img src="images/serres.png" alt="Les serres" />
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
@import "../globals.scss";

#find-us {
  margin: 0 auto;
  max-width: 1000px;
  margin-top: 5rem;
  padding: 0 2rem;

  h1 {
    color: $main-green;
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    .text-map {
      flex: 1;

      iframe {
        border-radius: 15px;
        width: 100%;
      }
    }
    .images {
      flex-shrink: 1;
      display: flex;
      flex-wrap: wrap;
      max-width: 100%;
      gap: 1rem;

      img {
        flex: 1;
        min-width: 200px;
      }
    }
  }
}
</style>
