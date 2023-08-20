<template>
  <section id="find-our-products">
    <h1>Où trouver nos produits ?</h1>
    <div class="amap selling-point">
      <nuxt-img src="images/amap.webp" alt="Réseau AMAP logo" />
      <div class="description">
        <h2>Les jeudis soir à partir de Septembre 2023</h2>
        <p>
          Une AMAP (Association pour le maintien d'une Agriculture Paysanne) est
          en cours de création sur la commune de Gévezé. La distribution de
          paniers de légumes aura lieu tous les .
        </p>
      </div>
    </div>
    <div class="patates selling-point">
      <nuxt-img src="images/patates.webp" alt="Le champs de patates logo" />
      <div class="description">
        <h2>Le mercredi de 16h à 19h</h2>
        <p>
          Je vais également partager une vente de légumes avec le champ de
          Patates sur la commune de Langouët.
        </p>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
@import "../globals.scss";

#find-our-products {
  margin: 0 auto;
  max-width: 1000px;
  margin-top: 5rem;
  padding: 0 2rem;

  h1 {
    color: $main-green;
  }

  .selling-point {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    justify-content: center;
    .description {
      margin-left: 2rem;

      h2 {
        color: $lighter-green;
      }
    }

    @media screen and (max-width: 550px) {
      flex-wrap: wrap;
    }
  }
}
</style>
