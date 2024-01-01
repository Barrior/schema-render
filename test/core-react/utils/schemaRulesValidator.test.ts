import zh_CN from '@core-react/locale/zh_CN'
import {
  normalizeRules,
  SchemaRulesValidator,
  validateRules,
} from '@core-react/utils/schemaRulesValidator'
import sleep from '@test/@helpers/sleep'

const commonParams = {
  locale: zh_CN.validation,
  globalValidators: undefined,
  globalValidatorParams: undefined,
}

describe('SchemaRulesValidator type 验证', () => {
  test('type:error 规则应该符合预期', async () => {
    const validator = new SchemaRulesValidator({
      ...commonParams,
      rules: [{ type: 'string', required: true, message: '请输入内容' }],
      value: 3,
    })
    const res = await validator.validate()
    expect(res).toEqual({ status: 'error', message: '数据格式错误，期望 string 类型' })
  })

  test('type:success 规则应该符合预期', async () => {
    const validator = new SchemaRulesValidator({
      ...commonParams,
      rules: [{ type: 'string', required: true, message: '请输入内容' }],
      value: '3',
    })
    const res = await validator.validate()
    expect(res).toEqual({ status: 'success' })
  })
})

describe('SchemaRulesValidator required 验证', () => {
  test('required:error 规则应该符合预期', async () => {
    const message = '请输入内容'
    const validator = new SchemaRulesValidator({
      ...commonParams,
      rules: [{ required: true, message }],
      value: undefined,
    })
    const res = await validator.validate()
    expect(res).toEqual({ status: 'error', message })
  })

  test('required:success 规则应该符合预期', async () => {
    const validator = new SchemaRulesValidator({
      ...commonParams,
      rules: [{ required: true, message: '请输入内容' }],
      value: 'tit',
    })
    const res = await validator.validate()
    expect(res).toEqual({ status: 'success' })
  })
})

describe('SchemaRulesValidator len 验证', () => {
  // len:string
  test('len:string:error 规则应该符合预期', async () => {
    const message = '长度应该等于 3'
    const validator = new SchemaRulesValidator({
      ...commonParams,
      rules: [{ len: 3, message }],
      value: 'title',
    })
    const res = await validator.validate()
    expect(res).toEqual({ status: 'error', message })
  })

  test('len:string:success 规则应该符合预期', async () => {
    const validator = new SchemaRulesValidator({
      ...commonParams,
      rules: [{ len: 3, message: '请输入内容' }],
      value: 'tit',
    })
    const res = await validator.validate()
    expect(res).toEqual({ status: 'success' })
  })

  // len:number
  test('len:number:error 规则应该符合预期', async () => {
    const message = '数值需要等于 3'
    const validator = new SchemaRulesValidator({
      ...commonParams,
      rules: [{ len: 3, message }],
      value: 2,
    })
    const res = await validator.validate()
    expect(res).toEqual({ status: 'error', message })
  })

  test('len:number:success 规则应该符合预期', async () => {
    const validator = new SchemaRulesValidator({
      ...commonParams,
      rules: [{ len: 3, message: '数值需要等于 3' }],
      value: 3,
    })
    const res = await validator.validate()
    expect(res).toEqual({ status: 'success' })
  })

  // len:array
  test('len:array:error 规则应该符合预期', async () => {
    const message = '数组长度需要等于 3'
    const validator = new SchemaRulesValidator({
      ...commonParams,
      rules: [{ len: 3, message }],
      value: [1, 2],
    })
    const res = await validator.validate()
    expect(res).toEqual({ status: 'error', message })

    const v2 = new SchemaRulesValidator({
      ...commonParams,
      rules: [{ len: 3, message }],
      value: [1, 2, 3, 4],
    })
    const r2 = await v2.validate()
    expect(r2).toEqual({ status: 'error', message })
  })

  test('len:array:success 规则应该符合预期', async () => {
    const validator = new SchemaRulesValidator({
      ...commonParams,
      rules: [{ len: 3, message: '数组长度需要等于 3' }],
      value: [1, 2, 3],
    })
    const res = await validator.validate()
    expect(res).toEqual({ status: 'success' })
  })
})

describe('SchemaRulesValidator min 验证', () => {
  const message = '不能小于3'

  // min:string
  test('min:string:error 规则应该符合预期', async () => {
    const validator = new SchemaRulesValidator({
      ...commonParams,
      rules: [{ min: 3, message }],
      value: 'st',
    })
    const res = await validator.validate()
    expect(res).toEqual({ status: 'error', message })
  })

  test('min:string:success 规则应该符合预期', async () => {
    const validator = new SchemaRulesValidator({
      ...commonParams,
      rules: [{ min: 3, message }],
      value: 'str',
    })
    const res = await validator.validate()
    expect(res).toEqual({ status: 'success' })
  })

  // min:number
  test('min:number:error 规则应该符合预期', async () => {
    const validator = new SchemaRulesValidator({
      ...commonParams,
      rules: [{ min: 3, message }],
      value: 2,
    })
    const res = await validator.validate()
    expect(res).toEqual({ status: 'error', message })
  })

  test('min:number:success 规则应该符合预期', async () => {
    const validator = new SchemaRulesValidator({
      ...commonParams,
      rules: [{ min: 3, message }],
      value: 3,
    })
    const res = await validator.validate()
    expect(res).toEqual({ status: 'success' })
  })

  // min:array
  test('min:array:error 规则应该符合预期', async () => {
    const validator = new SchemaRulesValidator({
      ...commonParams,
      rules: [{ min: 3, message }],
      value: [1, 2],
    })
    const res = await validator.validate()
    expect(res).toEqual({ status: 'error', message })
  })

  test('min:array:success 规则应该符合预期', async () => {
    const validator = new SchemaRulesValidator({
      ...commonParams,
      rules: [{ min: 3, message }],
      value: [1, 2, 3],
    })
    const res = await validator.validate()
    expect(res).toEqual({ status: 'success' })
  })
})

describe('SchemaRulesValidator max 验证', () => {
  const message = '不能大于3'

  // max:string
  test('max:string:error 规则应该符合预期', async () => {
    const validator = new SchemaRulesValidator({
      ...commonParams,
      rules: [{ max: 3, message }],
      value: 'string',
    })
    const res = await validator.validate()
    expect(res).toEqual({ status: 'error', message })
  })

  test('max:string:success 规则应该符合预期', async () => {
    const validator = new SchemaRulesValidator({
      ...commonParams,
      rules: [{ max: 3, message }],
      value: 'str',
    })
    const res = await validator.validate()
    expect(res).toEqual({ status: 'success' })
  })

  // max:number
  test('max:number:error 规则应该符合预期', async () => {
    const validator = new SchemaRulesValidator({
      ...commonParams,
      rules: [{ max: 3, message }],
      value: 4,
    })
    const res = await validator.validate()
    expect(res).toEqual({ status: 'error', message })
  })

  test('max:number:success 规则应该符合预期', async () => {
    const validator = new SchemaRulesValidator({
      ...commonParams,
      rules: [{ max: 3, message }],
      value: 3,
    })
    const res = await validator.validate()
    expect(res).toEqual({ status: 'success' })
  })

  // max:array
  test('max:array:error 规则应该符合预期', async () => {
    const validator = new SchemaRulesValidator({
      ...commonParams,
      rules: [{ max: 3, message }],
      value: [1, 2, 3, 4],
    })
    const res = await validator.validate()
    expect(res).toEqual({ status: 'error', message })
  })

  test('max:array:success 规则应该符合预期', async () => {
    const validator = new SchemaRulesValidator({
      ...commonParams,
      rules: [{ max: 3, message }],
      value: [1, 2, 3],
    })
    const res = await validator.validate()
    expect(res).toEqual({ status: 'success' })
  })
})

describe('SchemaRulesValidator pattern 验证', () => {
  const message = '不符合 pattern 规则'

  test('pattern:error 规则应该符合预期', async () => {
    const validator = new SchemaRulesValidator({
      ...commonParams,
      rules: [{ pattern: '^\\d+$', message }],
      value: '123s',
    })
    const res = await validator.validate()
    expect(res).toEqual({ status: 'error', message })
  })

  test('pattern:success 规则应该符合预期', async () => {
    const validator = new SchemaRulesValidator({
      ...commonParams,
      rules: [{ pattern: '^\\d+$', message }],
      value: '123',
    })
    const res = await validator.validate()
    expect(res).toEqual({ status: 'success' })
  })
})

describe('SchemaRulesValidator 复杂规则验证 - 多个 rule', () => {
  const validator = new SchemaRulesValidator({
    ...commonParams,
    rules: [
      { required: true, message: '请输入内容' },
      { min: 3, message: '至少输入3个字符' },
      { pattern: '^\\d+$', message: '只能输入数字' },
    ],
    value: undefined,
  })

  test('执行顺序应该符合预期', async () => {
    // 1、执行 required 规则
    const r1 = await validator.validate()
    expect(r1).toEqual({ status: 'error', message: '请输入内容' })

    // 2、执行 min 规则
    validator.setValue('12')
    const r2 = await validator.validate()
    expect(r2).toEqual({ status: 'error', message: '至少输入3个字符' })

    // 3、执行 pattern 规则
    validator.setValue('12s')
    const r3 = await validator.validate()
    expect(r3).toEqual({ status: 'error', message: '只能输入数字' })

    // 4、执行 success
    validator.setValue('123')
    const r4 = await validator.validate()
    expect(r4).toEqual({ status: 'success' })
  })
})

describe('SchemaRulesValidator 复杂规则验证，单个 rule', () => {
  const message = '验证错误'
  const validator = new SchemaRulesValidator({
    ...commonParams,
    rules: [{ required: true, min: 3, max: 5, pattern: '^\\d+$', message }],
    value: undefined,
  })

  test('执行顺序应该符合预期', async () => {
    // 1、执行 required 规则
    const r1 = await validator.validate()
    expect(r1).toEqual({ status: 'error', message })

    // 2、执行 min 规则
    validator.setValue('12')
    const r2 = await validator.validate()
    expect(r2).toEqual({ status: 'error', message })

    // 3、执行 max 规则
    validator.setValue('123456')
    const r3 = await validator.validate()
    expect(r3).toEqual({ status: 'error', message })

    // 4、执行 pattern 规则
    validator.setValue('12s')
    const r4 = await validator.validate()
    expect(r4).toEqual({ status: 'error', message })

    // 5、执行 success
    validator.setValue('123')
    const r5 = await validator.validate()
    expect(r5).toEqual({ status: 'success' })
  })
})

describe('SchemaRulesValidator global validator 验证', () => {
  const detectSensitiveWord: any = async ({ value }: any) => {
    if (!value) {
      return { status: 'error', message: '请输入内容' }
    }

    await sleep(50)

    if (value === 'warning') {
      return {
        status: 'warning',
        message: '警告信息',
        extra: { a: 0 },
      }
    }

    if (value !== 'suc') {
      return {
        status: 'error',
        message: '内容包含敏感词',
        extra: { a: 0 },
      }
    }

    return { status: 'success', message: '成功了' }
  }

  test('全局校验器规则应该符合预期', async () => {
    const validator = new SchemaRulesValidator({
      locale: zh_CN.validation,
      rules: [{ validator: 'detectSensitiveWord' }],
      globalValidators: { detectSensitiveWord },
      globalValidatorParams: {} as any,
      value: undefined,
    })
    const r1 = await validator.validate()
    expect(r1).toEqual({ status: 'error', message: '请输入内容' })

    validator.setValue('warning')
    const r2 = await validator.validate()
    expect(r2).toEqual({ status: 'warning', message: '警告信息', extra: { a: 0 } })

    validator.setValue('一段文案')
    const r3 = await validator.validate()
    expect(r3).toEqual({ status: 'error', message: '内容包含敏感词', extra: { a: 0 } })

    validator.setValue('suc')
    const r4 = await validator.validate()
    expect(r4).toEqual({ status: 'success' })
  })

  test('应该优先使用 rules 定义的提示信息', async () => {
    const validator = new SchemaRulesValidator({
      locale: zh_CN.validation,
      rules: [{ validator: 'detectSensitiveWord', message: '错误了' }],
      globalValidators: { detectSensitiveWord },
      globalValidatorParams: {} as any,
      value: undefined,
    })
    const res = await validator.validate()
    expect(res).toEqual({ status: 'error', message: '错误了' })
  })

  test('没有全局校验器应该校验成功', async () => {
    const validator = new SchemaRulesValidator({
      locale: zh_CN.validation,
      rules: [{ validator: 'detectSensitiveWord' }],
      globalValidators: undefined,
      globalValidatorParams: {} as any,
      value: undefined,
    })
    const res = await validator.validate()
    expect(res).toEqual({ status: 'success' })
  })

  test('全局校验器使用 rules 规则应该符合预期', async () => {
    const validator = new SchemaRulesValidator({
      locale: zh_CN.validation,
      rules: [{ validator: 'gRules' }],
      globalValidators: {
        gRules: [{ min: 3, message: '最少3个字符' }],
      },
      globalValidatorParams: {} as any,
      value: '12',
    })
    const res = await validator.validate()
    expect(res).toEqual({ status: 'error', message: '最少3个字符' })
  })

  test('全局校验器使用函数返回值 rules 规则应该符合预期', async () => {
    const validator = new SchemaRulesValidator({
      locale: zh_CN.validation,
      rules: [{ validator: 'fnReturnRules' }],
      globalValidators: {
        fnReturnRules: async () => {
          await sleep(50)
          return [{ max: 5, message: '最多5个字符' }]
        },
      },
      globalValidatorParams: {} as any,
      value: '123456',
    })
    const res = await validator.validate()
    expect(res).toEqual({ status: 'error', message: '最多5个字符' })
  })

  test('没有返回值的全局校验器应该是验证成功状态', async () => {
    const validator = new SchemaRulesValidator({
      locale: zh_CN.validation,
      rules: [{ validator: 'fnReturnUndefined' }],
      globalValidators: {
        fnReturnUndefined: async () => {
          await sleep(50)
        },
      },
      globalValidatorParams: {} as any,
      value: '123456',
    })
    const res = await validator.validate()
    expect(res).toEqual({ status: 'success' })
  })
})

describe('normalizeRules 验证', () => {
  test('校验应该符合期望', () => {
    expect(normalizeRules(undefined)).toEqual([])

    expect(normalizeRules({})).toEqual([{}])
    expect(normalizeRules({ required: true })).toEqual([{ required: true }])

    expect(normalizeRules([])).toEqual([])
    expect(normalizeRules([{ required: true }])).toEqual([{ required: true }])
  })
})

describe('validateRules 验证', () => {
  const rules = [
    { required: true, message: '请输入内容' },
    { min: 3, message: '最少3个字符' },
  ]

  test('required 校验应该符合期望', async () => {
    const res = await validateRules({
      ...commonParams,
      rules,
      value: undefined,
    })
    expect(res).toEqual({ status: 'error', message: '请输入内容' })
  })

  test('min 校验应该符合期望', async () => {
    const res = await validateRules({
      ...commonParams,
      rules,
      value: 'st',
    })
    expect(res).toEqual({ status: 'error', message: '最少3个字符' })
  })

  test('应该校验成功', async () => {
    const res = await validateRules({
      ...commonParams,
      rules,
      value: 'title',
    })
    expect(res).toEqual({ status: 'success' })
  })
})
