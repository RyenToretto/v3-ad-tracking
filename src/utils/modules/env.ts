import pkg from '../../../package.json'
import deepClone from './deepClone'
import { warn } from './log'

export function getDoEnv(): ImportMetaEnv {
  const doEnv = deepClone(import.meta.env)

  Object.entries(import.meta.env).forEach(([key, value]) => {
    const realValue = value && value.replace ? value.replace(/\\n/g, '\n') : value
    if (realValue === 'true' || realValue === 'false') {
      doEnv[key] = realValue === 'true'
    } else if (/^\d+$/.test(realValue)) {
      doEnv[key] = Number(realValue)
    } else if (realValue === 'null') {
      doEnv[key] = null
    } else if (realValue === 'undefined') {
      doEnv[key] = undefined
    } else {
      doEnv[key] = realValue
    }
  })

  if (!/^[a-zA-Z_]*$/.test(doEnv.VITE_GLOB_APP_SHORT_NAME)) {
    warn('VITE_GLOB_APP_SHORT_NAME 仅支持字母和下划线，请修改 .env 文件.')
  }

  return doEnv
}

export function getCommonStoragePrefix() {
  const doEnv = getDoEnv()
  return `${doEnv.VITE_GLOB_APP_SHORT_NAME}__${doEnv.MODE}`.toUpperCase()
}

// Generate cache key according to version
export function getStorageShortName() {
  return `${getCommonStoragePrefix()}${`__${pkg.version}`}__`.toUpperCase()
}
