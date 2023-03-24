// 默认缓存期限为7天
const DEFAULT_CACHE_TIME = 60 * 60 * 24 * 7

/**
 * 创建本地缓存对象
 * @param {string=} prefixKey -
 * @param {Object} [storage=localStorage] - sessionStorage | localStorage
 */
export const createStorage = ({ prefixKey = '', storage = localStorage } = {}) => {
  /**
   * 本地缓存类
   * @class Storage
   */
  const Storage = class {
    private storage = storage
    private prefixKey?: string = prefixKey

    private wrapperKey(key: string) {
      return `${this.prefixKey}${key}`.toUpperCase()
    }

    /**
     * @description 设置缓存
     * @param {string} key 缓存键
     * @param {*} value 缓存值
     * @param expire 从现在开始 expire秒 以后过期
     */
    set(key: string, value: any, expire: number | null = null) {
      const sKey = this.wrapperKey(key)
      let sValue = JSON.stringify(value)
      if (expire) {
        sValue = JSON.stringify({
          value,
          expire: expire || expire === 0 ? new Date().getTime() + expire * 1000 : null
        })
      }
      this.storage.setItem(sKey, sValue)
    }

    /**
     * 读取缓存
     * @param {string} key 缓存键
     */
    get(key: string) {
      const item = this.storage.getItem(this.wrapperKey(key))
      try {
        const data = JSON.parse(item as string)
        if (data && data.expire) {
          if (data.expire >= Date.now()) {
            return data.value
          } else {
            this.remove(key)
            return null
          }
        }
        return data
      } catch (e) {
        return item as any
      }
    }

    /**
     * 从缓存删除某项
     * @param {string} key
     */
    remove(key: string) {
      this.storage.removeItem(this.wrapperKey(key))
    }

    /**
     * 清空所有缓存
     * @memberOf Cache
     */
    clear(): void {
      this.storage.clear()
    }

    /**
     * 设置cookie
     * @param {string} name cookie 名称
     * @param {*} value cookie 值
     * @param {number=} expire 过期时间
     * 如果过期时间未设置，默认关闭浏览器自动删除
     * @example
     */
    setCookie(name: string, value: any, expire: number | null = DEFAULT_CACHE_TIME) {
      document.cookie = `${this.wrapperKey(name)}=${value}; Max-Age=${expire}`
    }

    /**
     * 根据名字获取cookie值
     * @param name
     */
    getCookie(name: string): string {
      const cookieArr = document.cookie.split('; ')
      for (let i = 0, length = cookieArr.length; i < length; i++) {
        const kv = cookieArr[i].split('=')
        if (kv[0] === this.wrapperKey(name)) {
          return kv[1]
        }
      }
      return ''
    }

    /**
     * 根据名字删除指定的cookie
     * @param {string} key
     */
    removeCookie(key: string) {
      this.setCookie(key, 1, -1)
    }

    /**
     * 清空cookie，使所有cookie失效
     */
    clearCookie(): void {
      const keys = document.cookie.match(/[^ =;]+(?==)/g)
      if (keys) {
        for (let i = keys.length; i--; ) {
          document.cookie = keys[i] + '=0;expire=' + new Date(0).toUTCString()
        }
      }
    }
  }
  return new Storage()
}

export const storage = createStorage()

export default storage
