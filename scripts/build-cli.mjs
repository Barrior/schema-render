import inquirer from 'inquirer'
import path from 'path'
import { fileURLToPath } from 'url'

import buildProject from './build.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const packages = path.resolve(__dirname, '../packages')

inquirer
  .prompt([
    {
      type: 'checkbox',
      message: '选择需要构建的项目',
      name: 'packages',
      choices: packages,
      validate(answer) {
        if (answer.length < 1) {
          return '至少选择一个'
        }
        return true
      },
    },
  ])
  .then((answers) => {
    buildProject({ packages: answers })
  })
