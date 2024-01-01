import swc from '@swc/core'
import { execaCommandSync } from 'execa'
import { writeFileSync } from 'fs'
import { globSync } from 'glob'
import ora from 'ora'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DIR_PACKAGES = path.resolve(__dirname, '../packages')

const spinner = ora()

class Build {
  constructor(packageName) {
    this.inputDir = path.resolve(DIR_PACKAGES, `${packageName}/src`)
    this.outputDir = path.resolve(DIR_PACKAGES, `${packageName}/dist`)
    this.runWorkflow()
  }

  runWorkflow() {
    this.cleanDir()
    this.buildFiles()
  }

  cleanDir() {
    execaCommandSync(`rm -rf ${this.outputDir}`)
  }

  buildFiles() {
    const files = globSync('**', {
      cwd: this.inputDir,
      dot: false,
      nodir: true,
      ignore: ['**/node_modules/**'],
    })
    spinner.succeed('====== Build esm ======')
    this.buildESM(files)
    spinner.succeed('====== Build cjs ======')
    this.buildCJS(files)
  }

  writeFile(filename, content, type) {
    filename = filename.replace(/\.tsx?$/, '.js')
    const destPath = path.resolve(this.outputDir, type, filename)

    execaCommandSync(`mkdir -p ${path.dirname(destPath)}`)
    writeFileSync(destPath, content, { encoding: 'utf8' })

    spinner.succeed(`Write file succeed: ${destPath}`)
  }

  buildESM(files) {
    files.forEach((filename) => {
      const absPath = path.resolve(this.inputDir, filename)

      if (/\.tsx?$/.test(filename)) {
        const output = swc.transformFileSync(absPath, {
          inputSourceMap: false,
          isModule: true,
          configFile: path.resolve(__dirname, './config/swc.esm.json'),
        })
        this.writeFile(filename, output.code, 'esm')
      }
    })
  }

  buildCJS(files) {
    files.forEach((filename) => {
      const absPath = path.resolve(this.inputDir, filename)

      if (/\.tsx?$/.test(filename)) {
        const output = swc.transformFileSync(absPath, {
          inputSourceMap: false,
          isModule: true,
          configFile: path.resolve(__dirname, './config/swc.cjs.json'),
        })
        this.writeFile(filename, output.code, 'cjs')
      }
    })
  }
}

export default function buildProject(opts) {
  opts.packages.forEach((packageName) => {
    new Build(packageName)
  })
}
