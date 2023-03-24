import { execSync } from 'child_process'
import chalk from 'chalk'
import { prompt } from 'enquirer'

import { PROJECT_PATH, BACKEND_PROJECT_PATH, outputDir } from './config'
import { getBranch, getStatus, generateStaticVersionFile } from './utils'

const log = console.log
const commitInfo = getCommitInfo()

// 获取提交信息
function getCommitInfo(_path = PROJECT_PATH) {
  const logText = execSync('git log --oneline -n 1', {
    cwd: _path,
    encoding: 'utf-8'
  })
  const branch = getBranch()
  const commitSHA = logText.substring(0, 7)
  const commitMessage = logText.substring(8)
  // log(chalk.green(newMessage))
  return `[${branch}:${commitSHA}] ${commitMessage}`
}

// 询问是否提交后端代码
function confirmCommit() {
  return new Promise((resolve, reject) => {
    prompt({
      type: 'confirm',
      name: '提交',
      message: '是否提交后端代码'
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

// 提交后端代码
function commitBackendProject() {
  const status = getStatus(BACKEND_PROJECT_PATH)
  if (status) {
    log(status)
    execSync(`git add . && git commit -m '${commitInfo}'`, {
      cwd: BACKEND_PROJECT_PATH,
      encoding: 'utf-8'
    })
    log(chalk.green('提交成功！请到后端项目手动push代码'))
    log(
      execSync('git log --oneline -1', {
        cwd: BACKEND_PROJECT_PATH,
        encoding: 'utf-8'
      })
    )
  } else {
    log('没有要提交的代码')
  }
}

function init() {
  confirmCommit()
    .then((result) => {
      if (result) {
        commitBackendProject()
      } else {
        log(chalk`{green 稍后可手动提交。 提交信息如下：}\n${commitInfo}`)
      }
    })
    .catch(() => {})
}

generateStaticVersionFile(`${outputDir}/data/version.json`)
  .then(() => {
    init()
  })
  .catch((e) => {
    throw e
  })
  .finally(() => {})
