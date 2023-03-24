<template>
  <router-view />
</template>

<script setup lang="ts">
import { useLoadingBar } from 'naive-ui'
import router from '@/router'

const loadingBar = useLoadingBar()

router.beforeEach(() => loadingBar?.start())

router.afterEach(() => loadingBar?.finish())
</script>
