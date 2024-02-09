<script setup lang="ts">
defineProps(["src", "alt"]);
</script>

<template>
  <nuxt-img :src="src" :alt="alt" />
  <slot />
</template>