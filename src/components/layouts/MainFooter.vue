<template>
  <div class="aside-footer">{{ projectName }} &copy; {{ new Date().getFullYear() }}</div>
</template>

<script setup lang="ts">
import { getDoEnv } from '@/utils'

const projectName = getDoEnv().VITE_GLOB_APP_TITLE
</script>

<style scoped>
.aside-footer {
  box-sizing: border-box;
  padding: 6px 12px;
  opacity: 0.6;
  text-align: center;
}
</style>
