import { defineStore } from 'pinia'
import store from '@/store'
import config from '@/config'

const { darkTheme, appTheme, appThemeList } = config.ui

interface DesignSettingState {
  darkTheme: boolean // 深色主题
  appTheme: string // 系统风格
  appThemeList: string[] // 系统内置风格
}

export const useDesignSetting = defineStore({
  id: 'design_setting',
  state: (): DesignSettingState => ({
    darkTheme,
    appTheme,
    appThemeList
  }),
  getters: {
    getDarkTheme(): boolean {
      return this.darkTheme
    },
    getAppTheme(): string {
      return this.appTheme
    },
    getAppThemeList(): string[] {
      return this.appThemeList
    }
  },
  actions: {}
})

// 组件之外调用。不能在组件内部使用
export function useDesignSettingWithOut() {
  return useDesignSetting(store)
}
