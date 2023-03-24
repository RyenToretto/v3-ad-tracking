import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import { configHtmlPlugin } from './html'
import { configMockPlugin } from './mock'
import type { Plugin, PluginOption } from 'vite'

export function createVitePlugins(env: ImportMetaEnv, isBuild: boolean) {
  const vitePlugins: (Plugin | Plugin[] | PluginOption[])[] = [
    vue(), // have to
    vueJsx() // have to
  ]

  vitePlugins.push(configHtmlPlugin(env, isBuild)) // vite-plugin-html

  // vite-plugin-mock
  env.VITE_USE_MOCK && vitePlugins.push(configMockPlugin(isBuild, env.VITE_USE_MOCK))

  return vitePlugins
}
