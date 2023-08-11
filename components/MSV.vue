<template>
  <section id="msv">
    <h1>Le Maraîchage sur Sol Vivant</h1>
    <b>
      L’idée du MSV est de favoriser la vie du sol. Cela se traduit par:<br /><br />
      un travail du sol réduit<br />
      la pratique des couverts végétaux<br />
      l'apport de matières organiques
    </b>

    <h2>Exemple: La culture du choux</h2>

    <div class="steps">
      <div class="step" v-for="(step, index) in steps">
        <div class="step-number">{{ index + 1 }}</div>
        <span class="step-description">
          <b>{{ step.date }}</b>
          {{ step.description }}</span
        >
        <img
          v-if="step.image"
          class="step-image"
          :src="step.image"
          :placeholder="step.imagePlaceholder"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { MSVStep } from "types/MSVStep";

const steps: MSVStep[] = [
  {
    date: "Octobre 2022",
    description: "Un couvert végétal de Seigle et Avoine est semé.",
    image: "assets/tracteur.png",
  },
  {
    date: "Mai 2023",
    description:
      "Le couvert végétal est arrivé à épiaison. Je le couche avec un rouleau faca (rouleau avec des lames qui pincent les tiges du couvert végétal).",
    image: "assets/couche.png",
  },
  {
    description:
      "Je mets une bâche d’ensilage par dessus pendant 1 mois pour que le couvert ne puisse pas se relever. Je mets ensuite un paillage (paille ou foin) par dessus pour limiter la poussée d’aventices appelé communément mauvaise herbes.",
    image: "assets/bache.png",
  },
  {
    description:
      " Je peux ensuite planter les choux début Juillet. La destruction progressive du couvert dans le sol laisse un réseau favorable pour la vie de ce dernier. Ainsi, l’apport de matière organique se fait par le couvert en lui-même et le paillage.",
  },
];
</script>

<style scoped lang="scss">
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

  .steps {
    // border-left: 3px solid var(--main-green, #00584b);
    // border-right: 3px solid var(--main-green, #00584b);
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .step {
      display: flex;
      gap: 2rem;
      align-items: center;
      position: relative;
      // border-top: 1px dashed var(--main-green, #00584b);
      justify-content: space-between;

      @media screen and (max-width: 768px) {
        flex-wrap: wrap;
        justify-content: center;
      }

      .step-number {
        font-size: 3rem;
        font-weight: 800;
        color: var(--main-green, #00584b);
        background: $beige;
        font-family: Inter;
        font-size: 3rem;
        font-style: normal;
        line-height: normal;

        width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        border-radius: 100%;
      }

      .step-description {
        // padding: 4rem;
        padding: 1rem;
      }

      .step-image {
      }
    }
  }
}
</style>
