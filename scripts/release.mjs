import { execSync } from 'child_process'
import { readdirSync, readFileSync, writeFileSync } from 'fs'
import inquirer from 'inquirer'
import { forEach } from 'lodash-es'
import path from 'path'
import { fileURLToPath } from 'url'

import logger from './logger.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const packages = path.resolve(__dirname, '../packages')
const projectNames = readdirSync(packages)

const projectMap = {
  'core-react': {
    dependencies: [],
  },
  'form-render-react': {
    dependencies: ['@schema-render/core-react'],
  },
  'search-react': {
    dependencies: ['@schema-render/form-render-react'],
  },
}

class Release {
  constructor() {
    this.run()
  }

  async run() {
    await this.askReleaseVersion()
    this.bumpVersion()
    this.commit()
  }

  async askReleaseVersion() {
    // 读取 core package.json
    const filePath = path.resolve(packages, './core-react/package.json')
    const pkg = JSON.parse(readFileSync(filePath, { encoding: 'utf8' }))

    logger.info('Current version:', pkg.version)

    const questions = [
      {
        type: 'input',
        name: 'version',
        message: 'New version:',
      },
    ]

    const answers = await inquirer.prompt(questions)

    // Trim the answers of input
    forEach(answers, (value, key) => {
      answers[key] = value.trim()
    })

    this.newVersion = answers.version
  }

  /**
   * 将每个项目自身的版本号、依赖项的版本号更新为最新的
   */
  bumpVersion() {
    projectNames.forEach((projectName) => {
      // 读取内容
      const filePath = path.resolve(packages, `./${projectName}/package.json`)
      const pkgContent = JSON.parse(readFileSync(filePath, { encoding: 'utf8' }))

      // 更新自身版本号
      pkgContent.version = this.newVersion

      // 更新依赖项版本号
      const matchedItem = projectMap[projectName]
      if (matchedItem) {
        matchedItem.dependencies.forEach((name) => {
          pkgContent.dependencies[name] = `^${this.newVersion}`
        })
      }

      // 更新文件内容
      writeFileSync(filePath, JSON.stringify(pkgContent, null, 2) + '\n')

      logger.log(`${projectName} 版本更新完成`)
    })
  }

  /**
   * 提交 git
   */
  commit() {
    execSync(`git commit -am "build: v${this.newVersion}" -n`, {
      stdio: 'inherit',
    })
  }
}

new Release()
