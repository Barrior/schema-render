import { defineConfig } from 'father';

export default defineConfig({
  // more father config: https://github.com/umijs/father/blob/master/docs/config.md
  esm: {
    input: 'src',
    output: 'dist/esm',
    transformer: 'swc',
  },
  cjs: {
    input: 'src',
    output: 'dist/cjs',
    transformer: 'swc',
  },
});
