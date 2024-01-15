import {
  classNamesWithPrefix,
  createRegExpByString,
  generateUID,
  sleep,
  templateCompiled,
} from '@core-react/utils/base'

describe('generateUID 验证', () => {
  test('生成的 UID 应该是 4 组 4 个数字加中横线连接起来的字符串', () => {
    expect(/^\d{4}-\d{4}-\d{4}-\d{4}$/.test(generateUID())).toBeTruthy()
  })
})

describe('createRegExpByString 验证', () => {
  test('非字符串类型时应该返回 null 值', () => {
    const result = createRegExpByString(undefined)
    expect(result).toBe(null)
  })
})

describe('sleep 验证', () => {
  test('默认 sleep 应该是 1s', async () => {
    const start = Date.now()
    await sleep()
    expect(Date.now() - start).toBeGreaterThanOrEqual(1000)
  })
  test('传递时间时，应该等待传递时间', async () => {
    const start = Date.now()
    await sleep(2000)
    expect(Date.now() - start).toBeGreaterThanOrEqual(2000)
  })
})

describe('classNamesWithPrefix 验证', () => {
  const PREFIX_CLS = 'PREFIX_CLS'

  test('没有 class 入参应该返回空字符串', () => {
    expect(classNamesWithPrefix(PREFIX_CLS)).toBe('')
  })

  test('空格等无效字符串 class 入参应该返回空字符串', () => {
    expect(classNamesWithPrefix(PREFIX_CLS, ' ')).toBe('')
  })

  test('正确的入参校验', () => {
    expect(classNamesWithPrefix(PREFIX_CLS, 'class-a')).toBe(`${PREFIX_CLS}-class-a`)
    expect(
      classNamesWithPrefix(PREFIX_CLS, {
        'class-a': true,
        'class-b': true,
        'class-c': false,
      })
    ).toBe(`${PREFIX_CLS}-class-a ${PREFIX_CLS}-class-b`)
  })
})

describe('templateCompiled 验证', () => {
  test('语法内的关键字应该忽略前后空格', () => {
    const result = templateCompiled('${label}是必填字段哦${ foo }', {
      label: '标题',
      foo: '-好的-',
    })
    expect(result).toBe('标题是必填字段哦-好的-')
  })

  test('没有对应数据的语法应该替换为空字符串', () => {
    const result = templateCompiled('${label}是必填字段哦', {
      foo: 'bar',
    })
    expect(result).toBe('是必填字段哦')
  })

  test('没有内容的语法应该替换为空字符串', () => {
    const result = templateCompiled('hello${}world', {
      foo: 'bar',
    })
    expect(result).toBe('helloworld')
  })

  test('参数是可选参数', () => {
    const result1 = templateCompiled()
    expect(result1).toBe('')

    const result2 = templateCompiled('${label}是必填字段哦')
    expect(result2).toBe('是必填字段哦')
  })
})
