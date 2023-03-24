<template>
  <div
    class="main-view"
    :style="{
      paddingLeft: `${layoutInfo.asideWidth}px`,
      paddingTop: `${layoutInfo.headerHeight}px`
    }"
  >
    <main-header />
    <base-aside />

    <div class="main-body">
      <router-view v-slot="{ Component, route }">
        <transition-group name="fade-transform">
          <div :key="route.fullPath" class="main-ani-wrapper">
            <component :is="Component" />
          </div>
        </transition-group>
      </router-view>
    </div>

    <main-footer />
  </div>
</template>

<script setup lang="ts">
import BaseAside from './BaseAside.vue'
import MainHeader from './MainHeader.vue'
import MainFooter from './MainFooter.vue'
import { useLayoutInfo } from '@/store/modules/useLayoutInfo'

const layoutInfo = useLayoutInfo()
</script>

<style lang="scss" scoped>
.main-view {
  box-sizing: border-box;
  padding-left: 0;
  min-height: 100vh;
  transition: padding 0.3s linear;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  .main-body {
    box-sizing: border-box;
    flex: 1;
  }
}

/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
}
.fade-transform-enter-active {
  opacity: 0;
  transform: translateX(-30px);
}
.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
/* 使进入的元素处于顶部 */
.fade-transform-enter-active {
  position: absolute;
  top: 0;
}
</style>
