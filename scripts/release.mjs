import { execaCommand, execaCommandSync } from 'execa'
import { readdirSync, readFileSync, writeFileSync } from 'fs'
import inquirer from 'inquirer'
import { forEach } from 'lodash-es'
import ora from 'ora'
import path from 'path'
import { fileURLToPath } from 'url'

import logger from './logger.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const packages = path.resolve(__dirname, '../packages')
const projectNames = readdirSync(packages)
const spinner = ora()

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
  newVersion = ''

  constructor() {
    this.run()
  }

  async run() {
    this.catchErrorAndCleanWorkspace()
    this.checkBranchAndStatus()
    await this.runLintAndTest()
    await this.askReleaseVersion()
    this.bumpVersion()
    await this.buildProduct()
    await this.publishToNpm()
    this.commit()
  }

  /**
   * 命令过程出现错误时，清除构建过程产生的文件，还原到命令执行前的状态
   */
  catchErrorAndCleanWorkspace() {
    process.on('uncaughtException', () => {
      logger.error('命令过程执行存在错误，还原文件变更至初始状态')
      execaCommandSync('git checkout .', { stdio: 'inherit' })
    })
  }

  /**
   * 检查分支名称是否正确：必须是 master 或者 main 分支才允许
   * 检查分支状态是否正确：必须是干净的分支，不存在未提交的内容
   */
  checkBranchAndStatus() {
    // 检查分支名称
    const branchName = execaCommandSync('git symbolic-ref HEAD --short').stdout
    if (!['master', 'main'].includes(branchName)) {
      logger.error('命令执行分支不正确，只允许 master 或者 main 分支')
      process.exit(1)
    }

    // 检查分支状态
    const status = execaCommandSync('git status --porcelain').stdout
    if (status) {
      logger.error('分支状态不正确，存在未提交的文件')
      process.exit(1)
    }
  }

  /**
   * 校验代码风格与运行测试用例
   */
  async runLintAndTest() {
    spinner.start('代码风格校验')
    await execaCommand('yarn lint')
    spinner.succeed()

    spinner.start('测试用例验证')
    await execaCommand('yarn test --verbose=false')
    spinner.succeed()
  }

  /**
   * 咨询发布版本号
   */
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

    // 去除输入内容首尾空白
    forEach(answers, (value, key) => {
      answers[key] = value.trim()
    })

    this.newVersion = answers.version
  }

  /**
   * 将每个项目自身的版本号、依赖项的版本号更新为最新的
   */
  bumpVersion() {
    if (!this.newVersion) {
      logger.error('发布版本号不存在')
      process.exit(1)
    }

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
   * 构建产品，将源码编译到 dist 目录
   */
  async buildProduct() {
    for (let i = 0; i < projectNames.length; i++) {
      const projectName = projectNames[i]
      const dirPath = path.resolve(packages, `./${projectName}`)

      spinner.start(`执行 ${projectName} 构建命令`)
      await execaCommand('npm run build', { cwd: dirPath })
      spinner.succeed()
    }
  }

  /**
   * 发布到 npm
   */
  async publishToNpm() {
    for (let i = 0; i < projectNames.length; i++) {
      const projectName = projectNames[i]
      const dirPath = path.resolve(packages, `./${projectName}`)

      spinner.start(`发布 ${projectName}`)
      await execaCommand('npm publish', { cwd: dirPath })
      spinner.succeed()
    }
  }

  /**
   * 提交 git
   */
  commit() {
    const commitFiles = projectNames
      .map((projectName) => `packages/${projectName}/package.json`)
      .join(' ')
    execaCommandSync(`git add ${commitFiles}`)
    execaCommandSync(`git commit -m chore(release):\\ v${this.newVersion} -n`)
    execaCommandSync(`git tag v${this.newVersion}`)
    logger.log(`文件变更提交 Git 完成`)

    // execaCommandSync('git push origin --tags')
    // logger.log(`推送 Git 到远程 origin 仓库完成`)
  }
}

new Release()
