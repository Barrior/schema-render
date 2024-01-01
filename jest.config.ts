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
  testPathIgnorePatterns: ['<rootDir>/test/@.+/'],
  setupFilesAfterEnv: ['<rootDir>/test/@helpers/jest-setup.ts'],
  clearMocks: true,
  maxConcurrency: 10,
}

export default config
