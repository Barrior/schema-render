import { defineConfig } from 'dumi'
import path from 'path'
import sass from 'sass'

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
      { title: '💎 Core', activePath: '/core-react', link: '/core-react/001-intro' },
      { title: '🚀 FormRender', activePath: '/form-render-react', link: '/form-render-react/001-intro' },
      { title: '⛵️ Search', activePath: '/search-react', link: '/search-react/001-intro' },
      { title: '🛳 SearchTable', activePath: '/search-table-react', link: '/search-table-react/001-intro' },
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
    '@schema-render/core-react/src': path.resolve('packages/core-react/src'),
    '@schema-render/form-render-react/src': path.resolve(
      'packages/form-render-react/src'
    ),
    '@schema-render/search-react/src': path.resolve('packages/search-react/src'),
    '@schema-render/search-table-react/src': path.resolve(
      'packages/search-table-react/src'
    ),

    '@examples': path.resolve('examples'),
    '@schema-render/core-react': path.resolve('packages/core-react/src'),
    '@schema-render/form-render-react': path.resolve('packages/form-render-react/src'),
    '@schema-render/search-react': path.resolve('packages/search-react/src'),
    '@schema-render/search-table-react': path.resolve('packages/search-table-react/src'),
  },
  mfsu: false,
  analytics: {
    // 百度统计
    baidu: 'c5249e1a7532f134490322a9c0c82945',
  },
})
