import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@test/(.*)': '<rootDir>/test/$1',
    '^@core-react/(.*)': '<rootDir>/packages/core-react/src/$1',
    '^@form-render-react/(.*)': '<rootDir>/packages/form-render-react/src/$1',
  },
  roots: ['<rootDir>/test/'],
  // 排查 test 目录以 @ 符号开头的目录，如 @helpers、core-react/@helpers
  testPathIgnorePatterns: ['<rootDir>/test/(.+/)?@.+/'],
  // 覆盖率同样的规则
  coveragePathIgnorePatterns: ['<rootDir>/test/(.+/)?@.+/'],
  setupFilesAfterEnv: ['<rootDir>/test/@helpers/jest-setup.ts'],
  clearMocks: true,
  maxConcurrency: 10,
}

export default config
