import { defineStore } from 'pinia'
import store from '@/store'

interface LayoutInfo {
  headerHeight: number
  miniAsideWidth: number
  fullAsideWidth: number
  asideCollapsed: boolean
}

export const useLayoutInfo = defineStore({
  id: 'layout_info',
  state: (): LayoutInfo => ({
    headerHeight: 60,
    miniAsideWidth: 100,
    fullAsideWidth: 200,
    asideCollapsed: false
  }),
  getters: {
    asideWidth(): number {
      if (this.asideCollapsed) {
        return this.miniAsideWidth
      } else {
        return this.fullAsideWidth
      }
    }
  },
  actions: {
    toogleAside() {
      this.asideCollapsed = !this.asideCollapsed
    }
  }
})

// 组件之外调用。不能在组件内部使用.
export function useLayoutInfoWithOut() {
  return useLayoutInfo(store)
}
