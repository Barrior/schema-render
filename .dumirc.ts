import { defineConfig } from 'dumi'
import sass from 'sass'
import path from 'path'

const globalStyles = sass.compile('./examples/global.scss')

export default defineConfig({
  outputPath: 'docs-dist',
  resolve: {
    docDirs: ['examples'],
  },
  styles: [globalStyles.css],
  themeConfig: {
    name: 'SchemaRender',
    logo: false,
    nav: [
      { title: '💎 Core', link: '/core-react/001-intro' },
      { title: '🚀 FormRender', link: '/form-render-react/001-intro' },
      { title: '⛵️ Search', link: '/search-react/001-intro' },
      // { title: '🛳 SearchTable', link: '/search-table-react/001-intro' },
    ],
    socialLinks: {
      github: 'https://github.com/Barrior/schema-render',
    },
    rtl: true,
    footer: false,
  },
  favicons: [
    // 指向 public/favicon.png
    '/favicon.png',
  ],
  alias: {
    // 根据精确程度按顺序声明
    '@schema-render/core-react/dist/esm': path.resolve('packages/core-react/src'),
    '@schema-render/form-render-react/dist/esm': path.resolve(
      'packages/form-render-react/src'
    ),
    '@schema-render/search-react/dist/esm': path.resolve('packages/search-react/src'),

    '@examples': path.resolve('examples'),
    '@schema-render/core-react': path.resolve('packages/core-react/src'),
    '@schema-render/form-render-react': path.resolve('packages/form-render-react/src'),
    '@schema-render/search-react': path.resolve('packages/search-react/src'),
  },
  mfsu: false,
  analytics: {
    // 百度统计
    baidu: 'c5249e1a7532f134490322a9c0c82945',
  },
})
