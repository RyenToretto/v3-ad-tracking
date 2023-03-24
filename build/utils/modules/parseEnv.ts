export function parseEnv(env: Recordable): ImportMetaEnv {
  const doEnv: any = {}

  Object.entries(env).forEach(([key, value]) => {
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

  return doEnv
}
