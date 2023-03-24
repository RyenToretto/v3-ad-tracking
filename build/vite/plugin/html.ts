/**
 * Plugin to minimize and use ejs template syntax in index.html.
 * https://github.com/anncwb/vite-plugin-html
 */
import { createHtmlPlugin } from 'vite-plugin-html'
import { getStaticVersion, stickToDateTime } from '../../utils'
import type { PluginOption } from 'vite'

export function configHtmlPlugin(env: ImportMetaEnv, isBuild: boolean): PluginOption[] {
  const { VITE_GLOB_APP_TITLE } = env

  return createHtmlPlugin({
    minify: isBuild,
    inject: {
      // 往 ejs template 注入变量
      data: {
        title: VITE_GLOB_APP_TITLE,
        STATIC_VERSION: getStaticVersion(),
        PUBLISH_TIME: stickToDateTime(Date.now())
      }
    }
  })
}
