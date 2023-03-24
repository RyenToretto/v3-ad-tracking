import chalk from 'chalk'
import { prompt } from 'enquirer'

import { PROJECT_PATH, BACKEND_PROJECT_PATH } from './config'
import { getBranch, getStatus } from './utils'

const log = console.log
log(chalk`
前端项目路径：{green ${PROJECT_PATH}}
后端项目路径：{green ${BACKEND_PROJECT_PATH}}
`)

// 检查分支是否匹配
function checkBranch() {
  const branch = getBranch()
  const backendBranch = getBranch(BACKEND_PROJECT_PATH)
  if (branch === backendBranch) {
    log(chalk.green('[✓]分支验证通过'))
  } else {
    log(chalk`
    {red 前后端分支不一致！}
    前端: ${branch}
    后端: ${backendBranch}
    `)
    confirmDiffBranch()
      .then((result) => {
        if (!result) {
          process.exitCode = 1
        }
      })
      .catch(() => {})
  }
}

function confirmDiffBranch() {
  return new Promise((resolve, reject) => {
    prompt({
      type: 'confirm',
      name: '前后端分支',
      message: '前后端分支不一致, 是否继续？'
    })
      .then((answer) => {
        // log('answer:', answer, typeof answer)
        resolve(answer)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

// 检查代码提交状态
function checkStatus() {
  const projectStateText = getStatus()
  const backendStateText = getStatus(BACKEND_PROJECT_PATH)
  if (projectStateText) {
    log(chalk.red('「前端项目」有代码未提交！请先commit代码'))
    process.exitCode = 1
  }
  if (backendStateText) {
    log(chalk.red('「后端项目」有代码未提交！请先commit代码'))
    process.exitCode = 1
  }
}

function init() {
  if (!(PROJECT_PATH && BACKEND_PROJECT_PATH)) {
    return
  }
  checkBranch()
  checkStatus()
}

init()
