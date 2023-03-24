import { h } from 'vue'
import { NIcon } from 'naive-ui'

/**
 * render 图标
 * */
export function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

/**
 * font 图标(Font class)
 * */
export function renderFontClassIcon(icon: string, iconName = 'iconfont') {
  return () => h('span', { class: [iconName, icon] })
}

/**
 * font 图标(Unicode)
 * */
export function renderUnicodeIcon(icon: string, iconName = 'iconfont') {
  return () => h('span', { class: [iconName], innerHTML: icon })
}

/**
 * font svg 图标
 * */
export function renderfontsvg(icon) {
  return () =>
    h(NIcon, null, {
      default: () =>
        h('svg', { class: `icon`, 'aria-hidden': 'true' }, h('use', { 'xlink:href': `#${icon}` }))
    })
}
