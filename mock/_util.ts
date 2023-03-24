// import { Random } from 'mockjs';
/*
  avatar: Random.image('400x400', Random.color(), Random.color(), Random.first()),
  id: '@integer(10,999999)',
  name: '@cname()',
  address: '@city()',
  date: `@date('yyyy-MM-dd')`,
  time: `@time('HH:mm')`,
  beginTime: '@datetime',
  endTime: '@datetime',
  'no|100000-10000000': 100000,
  'status|1': [true, false]
  online: '@boolean()'
  amount: Random.float(99999, 999999, 3, 5),

 * https://github.com/anncwb/vite-plugin-mock
 */
import { mock } from 'mockjs'

export const generateSuccess = (result = {}) => {
  return mock({
    ret: 200,
    result,
    serverTime: 1680599819795
  })
}

/**
 * @param {Number} times 回调函数需要执行的次数
 * @param {Function} callback 回调函数
 */
export function runTimes(times = 0, callback: any) {
  if (times >= 0 && callback) {
    let i = -1
    while (++i < times) {
      callback(i)
    }
  }
}
