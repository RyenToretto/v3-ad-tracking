import { execSync } from 'child_process'

/**
 * 获取仓库状态信息
 * @param {String} _path 路径
 * @returns string
 */
export function getStatus(_path = './') {
  return execSync('git status -s', {
    cwd: _path,
    encoding: 'utf-8'
  })
}
