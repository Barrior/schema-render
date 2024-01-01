import createEmotion from '@emotion/css/create-instance'

// ref https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
const randomAlphabeticalCharacters = Math.random()
  .toString(36)
  .substring(7)
  .replace(/\d/g, 'x')

// 创建随机类名 key
export const { css: cij } = createEmotion({
  key: `schema-render-${randomAlphabeticalCharacters}`,
})
