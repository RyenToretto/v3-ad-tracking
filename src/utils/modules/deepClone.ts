import { getRealType } from './is'

// 深拷贝
const deepClone = (data, noEmptyProperty = false) => {
  const _type = getRealType(data)
  let copyOfObj

  if (_type === 'array') {
    copyOfObj = []
  } else if (_type === 'object') {
    copyOfObj = {}
  } else {
    return data
  }

  for (const [key, value] of Object.entries(data)) {
    if (noEmptyProperty && (value === '' || value === null || value === undefined)) {
      continue
    }
    copyOfObj[key] = deepClone(value)
  }

  return copyOfObj
}

export default deepClone
