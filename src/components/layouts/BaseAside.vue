<template>
  <div
    class="base-aside"
    :style="{
      width: `${layoutInfo.asideWidth}px`,
      height: `calc(100vh - ${layoutInfo.headerHeight}px)`,
      top: `${layoutInfo.headerHeight}px`
    }"
  >
    <div class="aside-body">侧边栏</div>
  </div>
</template>

<script setup lang="ts">
import { useLayoutInfo } from '@/store/modules/useLayoutInfo'

const layoutInfo = useLayoutInfo()
</script>

<style lang="scss" scoped>
.base-aside {
  box-sizing: border-box;
  width: 200px;
  height: 100vh;
  overflow: auto;
  border-right: 1px solid var(--color-border);
  transition: width 0.3s linear;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  .aside-body {
    box-sizing: border-box;
    width: 100%;
    min-height: 320px;
    flex: 1;
  }
}
</style>
