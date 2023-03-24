<template>
  <main class="about-view">
    <div class="about-body">
      <TheWelcome />
    </div>
  </main>
</template>

<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<style lang="scss">
.about-view {
  box-sizing: border-box;
  .about-body {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
  }
}
</style>
