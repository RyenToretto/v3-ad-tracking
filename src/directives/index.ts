import copy from './modules/copy'
import focus from './modules/focus'
import type { App } from 'vue'

/**
 * 注册全局自定义指令
 * @param app
 */
export default {
  install: (app: App<Element>) => {
    app.directive('copy', copy)
    app.directive('focus', focus)
  }
}
