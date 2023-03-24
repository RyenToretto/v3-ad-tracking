<template>
  <n-config-provider
    :theme="theme"
    :theme-overrides="themeOverrides"
    :locale="zhCN"
    :date-locale="dateZhCN"
  >
    <n-loading-bar-provider>
      <slot />
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { darkTheme, zhCN, dateZhCN } from 'naive-ui'
import { useDesignSetting } from '@/store/modules/useDesignSetting'
import { lighten } from '@/utils'

export default defineComponent({
  setup() {
    const designSetting = useDesignSetting()

    const theme = computed(() => (designSetting.darkTheme ? darkTheme : undefined))
    return {
      theme,
      themeOverrides: {
        common: {
          primaryColor: designSetting.appTheme,
          primaryColorHover: lighten(designSetting.appTheme, 6),
          primaryColorPressed: lighten(designSetting.appTheme, 6),
          primaryColorSuppl: lighten(designSetting.appTheme, 6)
        }
      },
      zhCN,
      dateZhCN
    }
  }
})
</script>

<style lang="scss"></style>
