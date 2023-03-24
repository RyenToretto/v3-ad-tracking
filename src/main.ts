import { createApp } from 'vue'

import App from './App.vue'
import globalComponents from './components/globalComponents'

import store from './store'
import { axios, naive, nativeDiscreteApi } from './plugins'
import directives from './directives'
import router from './router'

import './assets/css/index.scss'

async function bootstrap() {
  const app = createApp(App)

  app.use(store) // 挂载状态管理

  app.use(naive) // Native UI 全局按需加载

  app.use(nativeDiscreteApi) // 挂载 naive-ui 脱离上下文的 Api

  app.use(globalComponents) // 注册全局自定义组件

  app.use(directives) // 挂载全局指令

  app.use(router) // 挂载路由

  app.use(axios) // 挂载axios

  app.mount('#app')
}

void bootstrap()
