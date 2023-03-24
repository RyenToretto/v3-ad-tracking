/**
 * v-copy
 * 复制某个值至剪贴板
 * 接收参数：string类型/Ref<string>类型/Reactive<string>类型
 */
import Clipboard from 'clipboard'
import type { Directive, DirectiveBinding } from 'vue'

interface ElType extends HTMLElement {
  __copy_data: string | number
  __handleClick: () => void
}

const copy: Directive = {
  mounted(el: ElType, binding: DirectiveBinding) {
    el.__copy_data = binding.value
    el.__handleClick = function () {
      const clipboard = new Clipboard(this, {
        text: () => this.__copy_data.toLocaleString()
      })
      clipboard.on('success', () => {
        window.$message.success('复制成功')
        clipboard.destroy()
      })
      clipboard.on('error', () => {
        window.$message.success('复制失败，请尝试手动复制')
        clipboard.destroy()
      })
    }
    el.addEventListener('click', el.__handleClick)
  },
  updated(el: ElType, binding: DirectiveBinding) {
    el.__copy_data = binding.value
  },
  beforeUnmount(el: ElType) {
    el.removeEventListener('click', el.__handleClick)
  }
}

export default copy
