import { loadEnv } from 'vite'
import dayjs from 'dayjs'
import { createVitePlugins } from './build/vite/plugin'
import { alias } from './build/vite/alias'
import { getLocalIp, parseEnv } from './build/utils'
import pkg from './package.json'
import type { UserConfig, ConfigEnv } from 'vite'

const { dependencies, devDependencies, name, version } = pkg
const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version },
  lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss')
}

export default ({ command, mode }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build'
  const root = process.cwd()
  const env = parseEnv(loadEnv(mode, root))
  return {
    base: env.VITE_PUBLIC_PATH,
    resolve: {
      alias,
      dedupe: ['vue']
    },
    esbuild: {
      pure: env.VITE_DROP_CONSOLE ? ['console.log', 'debugger'] : []
    },
    plugins: createVitePlugins(env, isBuild),
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__)
    },
    css: {
      preprocessorOptions: {
        scss: {
          modifyVars: {},
          javascriptEnabled: true,
          additionalData: `@import "src/assets/css/variables.scss";`
        }
      }
    },
    server: {
      host: '127.0.0.1',
      port: env.VITE_PORT,
      strictPort: false,
      open: `http://${getLocalIp()}:${env.VITE_PORT}`,
      proxy: {
        '/api': {
          target: env.VITE_API_PROXY,
          changeOrigin: true,
          ws: true
        }
      }
    },
    optimizeDeps: {
      include: [],
      exclude: ['vue-demi']
    },
    build: {
      target: 'es2015',
      cssTarget: 'chrome80',
      outDir: env.VITE_OUTPUT_DIR,
      reportCompressedSize: false,
      chunkSizeWarningLimit: 2000
    }
  }
}
