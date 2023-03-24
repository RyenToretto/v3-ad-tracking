import { Random } from 'mockjs'
import { generateSuccess } from '../_util'

const token = Random.string('upper', 32, 32)

const adminInfo = {
  userId: '1',
  username: 'admin',
  realName: '超级管理员',
  avatar: Random.image(),
  desc: 'manager',
  password: Random.string('upper', 4, 16),
  token,
  permissions: [
    {
      label: '主控台',
      value: 'dashboard_console'
    },
    {
      label: '监控页',
      value: 'dashboard_monitor'
    },
    {
      label: '工作台',
      value: 'dashboard_workplace'
    },
    {
      label: '基础列表',
      value: 'basic_list'
    },
    {
      label: '基础列表删除',
      value: 'basic_list_delete'
    }
  ]
}

export default [
  {
    url: '/api/v1/login',
    timeout: 1000,
    method: 'post',
    response: () => {
      return generateSuccess({ token })
    }
  },
  {
    url: '/api/v1/admin_info',
    timeout: 1000,
    method: 'get',
    response: () => {
      // const token = getRequestToken(request);
      // if (!token) return resultError('Invalid token');
      return generateSuccess(adminInfo)
    }
  }
]
