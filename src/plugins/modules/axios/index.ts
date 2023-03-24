import axios from 'axios'
import qs from 'qs'
import { normalHandler, errorHandler } from './interceptor'
import { deepClone, getDoEnv } from '@/utils'

export default {
  install: () => {
    const service = axios.create({
      baseURL: getDoEnv().VITE_API_BASE_URL,
      paramsSerializer: {
        serialize(params) {
          return qs.stringify(params, { arrayFormat: 'comma' })
        }
      }
    })
    service.interceptors.request.use(
      function (config) {
        /* 过滤请求参数中的空值 */
        if (['get', 'delete', 'post'].includes(config.method as string)) {
          const _dataKey = ['post', 'put', 'patch'].includes(config.method as string)
            ? 'data'
            : 'params'
          if (_dataKey in config) {
            config[_dataKey] = deepClone(config[_dataKey], true)
          }
        }
        return config
      },
      function (error) {
        return Promise.reject(error)
      }
    )
    service.interceptors.response.use(normalHandler, errorHandler)

    window.axios = service
  }
}
