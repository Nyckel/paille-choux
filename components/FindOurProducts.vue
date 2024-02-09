<template>
  <ContentRenderer id="find-our-products" :value="findProducts" tag="section" />
</template>
<style lang="scss">
@import "../globals.scss";

#find-our-products {
  margin: 0 auto;
  max-width: 1000px;
  margin-top: 5rem;
  padding: 0 2rem;

  h1 {
    color: $main-green;
  }

  ul {
    padding: 0;

    li {
      display: flex;
      align-items: center;
      margin-bottom: 2rem;
      justify-content: center;
      list-style-type: none;

      blockquote {
        margin-left: 2rem;

        h2 {
          color: $lighter-green;
        }
      }

      @media screen and (max-width: 550px) {
        flex-wrap: wrap;

        blockquote {
          margin: 0;
        }
      }
    }
  }
}
</style>
<script setup lang="ts">
const { data: findProducts } = await useAsyncData('products', () => queryContent('landing/find-products').findOne());
</script>