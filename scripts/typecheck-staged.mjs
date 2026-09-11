import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'

import logger from './logger.mjs'

// 获取暂存的 TS 文件
const stagedFiles = execSync('git diff --cached --name-only --diff-filter=ACM')
  .toString()
  .trim()
  .split('\n')
  .filter((file) => /\.(ts|tsx)$/.test(file))
  .map((file) => path.resolve(process.cwd(), file))

// 收集需要一起加载的全局类型声明文件
const globalTypeFiles = ['global.d.ts']
  .map((file) => path.resolve(process.cwd(), file))
  // 只保留实际存在的文件
  .filter((file) => fs.existsSync(file))

// 合并暂存文件和全局类型文件，并去重
const allFiles = [...new Set([...globalTypeFiles, ...stagedFiles])]

if (stagedFiles.length === 0) {
  logger.log('没有暂存的 TypeScript 文件需要检查。')
  process.exit(0)
}

// 生成临时 tsconfig
const tempConfig = {
  // 继承项目根配置
  extends: './tsconfig.json',
  compilerOptions: {
    noEmit: true,
    // 跳过 node_modules 中 .d.ts 的类型检查
    skipLibCheck: true,
  },
  // 仅包含暂存文件
  files: allFiles,
  // 清空 include，避免干扰
  include: [],
  // 显式排除 node_modules
  exclude: ['node_modules'],
}

const tempConfigPath = path.resolve(process.cwd(), 'tsconfig.staged.json')
fs.writeFileSync(tempConfigPath, JSON.stringify(tempConfig, null, 2))

try {
  // 执行类型检查
  execSync(`npx tsc -p ${tempConfigPath}`, { stdio: 'inherit' })
  logger.log('✅ 暂存文件类型检查通过')
  // 清理临时文件
  fs.unlinkSync(tempConfigPath)
  process.exit(0)
} catch (_err) {
  logger.error('❌ 类型检查失败')
  fs.unlinkSync(tempConfigPath)
  process.exit(1)
}
