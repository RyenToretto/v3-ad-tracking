import path from 'path'
import { loadEnv } from 'vite'
import chalk from 'chalk'

import { parseEnv } from './utils'

export const env = parseEnv(loadEnv('production', process.cwd()))

export const PROJECT_PATH = path.resolve(__dirname, '../')

const BACKEND_PROJECT_MAP = {
  // user: '/path/to/backendProject',
  lufei: '/Users/lufei/work/huaweiCloud/adTracking',
  chenfeifan: '/Users/chenfeifan/code/java/adTracking',
  koujianfeng: '/Users/koujianfeng/Desktop/kjf/do-global/huaweiCloud/adTracking'
}

function checkTheMap() {
  // @ts-ignore
  const hasBackendMap = process.env.USER in BACKEND_PROJECT_MAP
  if (hasBackendMap) {
    // @ts-ignore
    return path.resolve(__dirname, BACKEND_PROJECT_MAP[process.env.USER])
  } else {
    console.log(chalk`
    {red.bold 没有配置后端项目目录映射!}
    请在 {magenta.italic config.js -> BACKEND_PROJECT_MAP} 对象中增加如下配置：
    {green ${process.env.USER}: '/path/to/backendProject'}
    `)
    process.exitCode = 1
  }
}

export const BACKEND_PROJECT_PATH = checkTheMap()
const outputEnv = env.VITE_OUTPUT_DIR
export const outputDir =
  outputEnv && outputEnv.startsWith('/') ? outputEnv : path.resolve(__dirname, `../${outputEnv}`)
