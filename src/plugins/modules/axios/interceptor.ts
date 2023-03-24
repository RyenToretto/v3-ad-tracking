import errorMap from './errorMap'

function normalHandler(response): Promise<any> {
  return new Promise((resolve, reject) => {
    let CODE = null
    const isFileStream =
      response.headers['content-type'] ===
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8'
    if (isFileStream) {
      resolve(response)
      return
    }
    // 判断接口返回格式是否为Object
    if (Object.prototype.toString.call(response.data) !== '[object Object]') {
      reject(new Error('contentType error!'))
    }
    // 是否包含 ret 字段
    if (!('ret' in response.data)) {
      const error = new Error('ret params inExistence!')
      window.$message.error('数据异常')
      reject(error)
    }
    CODE = response.data.ret
    if (CODE === 200) {
      resolve(response.data.result) // 正常返回
    } else {
      // 其它错误
      let errorMsg = `${CODE}:${response.data.extra || response.data.message || '未知错误'}`
      if (CODE && errorMap[CODE]) {
        errorMsg = errorMap[CODE]
      }
      window.$message.error(errorMsg)
      reject(response.data.ret)
    }
  })
}
function errorHandler(err) {
  if (err.response && err.response.status === 401) {
    // store.commit('setToken', '')
    window.$dialog.warning({
      title: '登录状态失效',
      content: '您当前的登录状态已失效，请重新登录！',
      closable: false,
      closeOnEsc: false,
      maskClosable: false,
      positiveText: '去登录',
      onPositiveClick: () => {
        // router.push({ path: '/login' })
      }
    })
    return
  }
  // 主动取消的
  if (err.message === 'canceled') {
    return Promise.reject(err)
  }
  let doNotice = !!err.response
  if (
    err.response &&
    err.response.config &&
    err.response.config.url.includes('/data/version.json')
  ) {
    doNotice = false
  }
  doNotice && window.$message.error('服务异常: ' + err.response.status)
  return Promise.reject(err)
}

export { normalHandler, errorHandler }
