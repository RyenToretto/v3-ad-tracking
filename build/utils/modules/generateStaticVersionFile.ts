import fs from 'fs'
import { writeFileAsync } from './fileUtils'
import { generateVersionData } from './staticVersion'

const UTF8 = 'utf-8'

function mkdir(filePath) {
  const dirCache = {}
  const arr = filePath.split('/')
  let dir = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (dir && !dirCache[dir] && !fs.existsSync(dir)) {
      dirCache[dir] = true
      fs.mkdirSync(dir)
    }
    dir = dir + '/' + arr[i]
  }
}

export async function generateStaticVersionFile(outputPath) {
  const fileContent = await generateVersionData()
  if (!fs.existsSync(outputPath)) {
    mkdir(outputPath)
  }
  await writeFileAsync(outputPath, fileContent, { encoding: UTF8 })
}
