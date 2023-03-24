/**
 * v-focus
 * 获取焦点
 */
import type { Directive } from 'vue'

const focus: Directive = {
  mounted(el: HTMLElement) {
    el.focus && el.focus()
  }
}

export default focus
