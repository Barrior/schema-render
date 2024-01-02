import { defineConfig } from 'father'

export default defineConfig({
  // more father config: https://github.com/umijs/father/blob/master/docs/config.md
  esm: {
    input: 'src',
    output: 'dist/esm',
    transformer: 'swc',
    platform: 'node',
  },
  cjs: {
    input: 'src',
    output: 'dist/cjs',
    transformer: 'swc',
    platform: 'browser',
  },
  umd: {
    name: 'SchemaRenderCore',
    entry: {
      'src/index': {},
    },
    output: 'dist/umd',
    platform: 'browser',
    externals: {
      react: 'react',
    },
  },
})
