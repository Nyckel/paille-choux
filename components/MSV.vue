<template>
  <ContentRenderer id="msv" :value="msvIntro" tag="section" />
  <!-- <ContentRendererMarkdown :value="msvIntro" /> -->

  <!-- <h2>Exemple: La culture du choux</h2>

  <div class="steps">
    <div class="step" v-for="(step, index) in steps">
      <div class="step-number">{{ index + 1 }}</div>
      <span class="step-description">
        <b>{{ step.date }}</b>
        {{ step.description }}</span>
      <nuxt-img v-if="step.image" class="step-image" :src="step.image" :alt="step.alt" />
    </div>
  </div> -->
  <!-- </ContentRenderer> -->
</template>

<script setup lang="ts">
import { MSVStep } from "types/MSVStep";

const steps: MSVStep[] = [
  {
    date: "Octobre 2022",
    description: "Un couvert végétal de Seigle et Avoine est semé.",
    image: "images/tracteur.webp",
    alt: "tracteur",
  },
  {
    date: "Mai 2023",
    description:
      "Le couvert végétal est arrivé à épiaison. Je le couche avec un rouleau faca (rouleau avec des lames qui pincent les tiges du couvert végétal).",
    image: "images/couche.webp",
    alt: "champs",
  },
  {
    description:
      "Je mets une bâche d’ensilage par dessus pendant 1 mois pour que le couvert ne puisse pas se relever. Je mets ensuite un paillage (paille ou foin) par dessus pour limiter la poussée d’aventices appelé communément mauvaise herbes.",
    image: "images/bache.webp",
    alt: "bache",
  },
  {
    description:
      " Je peux ensuite planter les choux début Juillet. La destruction progressive du couvert dans le sol laisse un réseau favorable pour la vie de ce dernier. Ainsi, l’apport de matière organique se fait par le couvert en lui-même et le paillage.",
  },
];

const { data: msvIntro } = await useAsyncData('msv', () => queryContent('landing/msv').findOne());
</script>

<style lang="scss">
@import "../globals.scss";

#msv {
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 6rem;
  padding: 0 2rem;

  h1 {
    color: $main-green;
  }

  h2 {
    color: $lighter-green;
  }

  ol {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    li {
      display: flex;
      gap: 2rem;
      align-items: center;
      position: relative;
      justify-content: space-between;
      counter-increment: counterName;

      span {
        flex: 1;
      }

      @media screen and (max-width: 768px) {
        flex-wrap: wrap;
        justify-content: center;
      }

      strong {
        flex: 1;
      }

      &:before {
        content: '' counter(counterName);
        font-size: 3rem;
        font-weight: 800;
        color: var(--main-green, #00584b);
        background: $beige;
        font-family: Inter;
        font-size: 3rem;
        font-style: normal;
        line-height: normal;
        flex-shrink: 0;
        width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        border-radius: 100%;
      }

      img {
        border-radius: 10px;
      }
    }
  }

  .steps {
    // border-left: 3px solid var(--main-green, #00584b);
    // border-right: 3px solid var(--main-green, #00584b);
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .step {


      .step-number {}

      .step-description {
        flex: 1;
        padding: 1rem;
      }

      .step-image {}
    }
  }
}
</style>
