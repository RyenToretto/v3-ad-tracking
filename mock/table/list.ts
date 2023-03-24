import { Random } from 'mockjs'
import { generateSuccess, runTimes } from '../_util'

export default [
  {
    url: '/api/v1/table/list',
    timeout: 1000,
    method: 'get',
    response: ({ query }) => {
      const { curPage = 1, pageSize = 10 } = query
      const data: any[] = []
      runTimes(Number(pageSize), () =>
        data.push({
          id: '@integer(10,999999)',
          beginTime: '@datetime',
          endTime: '@datetime',
          address: '@city()',
          name: '@cname()',
          avatar: Random.image('400x400', Random.color(), Random.color(), Random.first()),
          date: `@date('yyyy-MM-dd')`,
          time: `@time('HH:mm')`,
          'no|100000-10000000': 100000,
          'status|1': [true, false]
        })
      )
      return generateSuccess({
        curPage: Number(curPage),
        pageSize: Number(pageSize),
        totalSize: 60,
        data
      })
    }
  }
]
