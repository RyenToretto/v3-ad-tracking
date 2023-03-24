import type { App } from 'vue'

export default {
  install: (app: App<Element>) => {
    console.log(app, 'TODO 注册全局自定义组件')
  }
}
