<template>
  <header class="main-header" :style="{ height: `${layoutInfo.headerHeight}px` }">
    <nav>
      <RouterLink class="green" to="/">Home</RouterLink>
      <RouterLink class="green" to="/about">About</RouterLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useLayoutInfo } from '@/store/modules/useLayoutInfo'
const layoutInfo = useLayoutInfo()
</script>

<style lang="scss" scoped>
.main-header {
  box-sizing: border-box;
  padding: 0 16px 0 0;
  width: 100vw;
  height: 60px;
  background-color: #fff;
  border-bottom: 1px solid var(--color-border);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  a {
    box-sizing: border-box;
    padding: 0 8px;
  }
}
</style>
