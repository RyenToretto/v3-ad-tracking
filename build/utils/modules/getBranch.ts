import { execSync } from 'child_process'

/**
 * 获取当前分支名称
 * @param {String} _path 项目路径
 * @returns {String} 分支名
 */
export function getBranch(_path = './') {
  const branch = execSync('git branch --show-current', {
    cwd: _path,
    encoding: 'utf-8'
  })
  return branch.trim()
}
