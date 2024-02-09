<template>
  <ContentRenderer id="msv" :value="msvIntro" tag="section" />
</template>

<script setup lang="ts">
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
    padding: 0;

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
