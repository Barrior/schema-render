import zh_CN from '@core-react/locale/zh_CN'
import {
  makeOpenValidatorParams,
  validateFormItem,
  validateRootSchema,
} from '@core-react/utils/validator'
import sleep from '@test/@helpers/sleep'

const commonParams = {
  locale: zh_CN,
  globalValidators: undefined,
  rendererValidator: undefined,
  rendererValidatorParams: {} as any,
  rootValue: {
    title: 'tit',
    content: 'con',
  },
}

describe('validateRootSchema 验证', () => {
  const setValidatorState = jest.fn()
  function createParams(value: any, schema?: any) {
    return {
      locale: zh_CN,
      rootSchema: {
        renderType: 'Root',
        properties: {
          title: {
            renderType: 'InputText',
            title: '标题',
            rules: [{ min: 3, message: '最少3个字符' }],
          },
          content: {
            renderType: 'InputText',
            title: '内容',
            rules: [{ min: 10, message: '最少10个字符' }],
          },
          ...schema,
        },
      },
      rootValue: value,
      disabled: false,
      renderers: {
        ['InputText'.toLowerCase()]: {
          component: () => 'COMPONENT',
          validator: async ({ value, userCtx }: any) => {
            await sleep(50)
            if (value === 'suc') {
              return { status: 'success' }
            }
            if (value === 'warning') {
              return {
                status: 'warning',
                message: `${userCtx.h}:警告信息`,
                extra: { a: 0 },
              }
            }
            return {
              status: 'error',
              message: `${userCtx.h}:错误信息`,
              extra: { a: 0 },
            }
          },
        },
      },
      rendererStorage: {
        title: { setValidatorState },
      },
      validators: undefined,
      userCtx: { h: 'hello' },
    } as any
  }

  test('schema rules 规则验证应该符合预期', async () => {
    const res = await validateRootSchema(
      createParams({
        title: '标题',
        content: '内容',
      })
    )
    expect(res).toEqual({
      hasError: true,
      hasWarning: false,
      warningList: [],
      errorList: [
        { path: ['title'], value: '标题', status: 'error', message: '最少3个字符' },
        { path: ['content'], value: '内容', status: 'error', message: '最少10个字符' },
      ],
    })
    expect(setValidatorState).toBeCalledWith({
      status: 'error',
      message: '最少3个字符',
    })
  })

  test('渲染器校验规则 warning & error 验证应该符合预期', async () => {
    const res = await validateRootSchema(
      createParams({
        title: 'warning',
        content: '我是内容哦-123456789',
      })
    )
    expect(res).toEqual({
      hasError: true,
      errorList: [
        {
          path: ['content'],
          value: '我是内容哦-123456789',
          status: 'error',
          message: 'hello:错误信息',
          extra: { a: 0 },
        },
      ],
      hasWarning: true,
      warningList: [
        {
          path: ['title'],
          value: 'warning',
          status: 'warning',
          message: 'hello:警告信息',
          extra: { a: 0 },
        },
      ],
    })
    expect(setValidatorState).toBeCalledWith({
      status: 'warning',
      message: 'hello:警告信息',
      extra: { a: 0 },
    })
  })

  test('渲染器校验规则 success 验证应该符合预期', async () => {
    const res = await validateRootSchema(
      createParams({ title: 'suc' }, { content: { renderType: 'non-existent' } })
    )
    expect(res).toEqual({
      hasError: false,
      hasWarning: false,
      errorList: [],
      warningList: [],
    })
    expect(setValidatorState).not.toBeCalled()
  })
})

describe('validateFormItem 验证', () => {
  test('schema.required boolean 规则应该被支持', async () => {
    const res = await validateFormItem({
      ...commonParams,
      schema: {
        renderType: 'InputText',
        title: '标题',
        required: true,
      },
      value: undefined,
      path: ['title'],
      userCtx: undefined,
    })
    // ref zh_CN.validation.required
    expect(res).toEqual({ status: 'error', message: '标题是必填项' })
  })

  test('schema.required $root 语法规则应该被支持', async () => {
    const res = await validateFormItem({
      ...commonParams,
      schema: {
        renderType: 'InputText',
        title: '标题',
        required: '$root.title === "hello"',
      },
      value: undefined,
      path: ['title'],
      userCtx: undefined,
    })
    expect(res).toEqual({ status: 'success' })
  })

  test('schema.required $userCtx 语法规则应该被支持', async () => {
    const res = await validateFormItem({
      ...commonParams,
      schema: {
        renderType: 'InputText',
        title: '标题',
        required: '$userCtx.checkTitle',
      },
      value: undefined,
      path: ['title'],
      userCtx: { checkTitle: true },
    })
    expect(res).toEqual({ status: 'error', message: '标题是必填项' })
  })

  test('rules 里已经存在 required 规则，则不应用 schema.required 规则', async () => {
    const res = await validateFormItem({
      ...commonParams,
      schema: {
        renderType: 'InputText',
        title: '标题',
        required: true,
        rules: [{ required: true, message: '请输入标题' }],
      },
      value: undefined,
      path: ['title'],
      userCtx: undefined,
    })
    expect(res).toEqual({ status: 'error', message: '请输入标题' })
  })

  test('rules 规则验证应该符合预期', async () => {
    const res = await validateFormItem({
      ...commonParams,
      schema: {
        renderType: 'InputText',
        title: '标题',
        required: true,
        rules: [{ min: 3, message: '最少输入3个字符' }],
      },
      value: 'st',
      path: ['title'],
      userCtx: undefined,
    })
    expect(res).toEqual({ status: 'error', message: '最少输入3个字符' })
  })

  test('渲染器内置校验：rules 规则应该符合预期', async () => {
    const res = await validateFormItem({
      ...commonParams,
      schema: {
        renderType: 'InputText',
        title: '标题',
        required: true,
        rules: [{ min: 3, message: '最少输入3个字符' }],
      },
      rendererValidator: [{ max: 5, message: '最多不能超过5个字符' }],
      value: '我是标题哦~~~~',
      path: ['title'],
      userCtx: undefined,
    })
    expect(res).toEqual({ status: 'error', message: '最多不能超过5个字符' })
  })

  test('渲染器内置校验：返回值 rules 规则应该符合预期', async () => {
    const res = await validateFormItem({
      ...commonParams,
      schema: {
        renderType: 'InputText',
        title: '标题',
        required: true,
        rules: [{ min: 3, message: '最少输入3个字符' }],
      },
      rendererValidator: async () => {
        await sleep(50)
        return [{ max: 5, message: '最多不能超过5个字符' }]
      },
      value: '我是标题哦~~~~',
      path: ['title'],
      userCtx: undefined,
    })
    expect(res).toEqual({ status: 'error', message: '最多不能超过5个字符' })
  })

  test('渲染器内置校验：返回值 SchemaRender 规则应该符合预期', async () => {
    const params: any = {
      ...commonParams,
      schema: {
        renderType: 'InputText',
        title: '标题',
        required: true,
        rules: [{ min: 3, message: '最少输入3个字符' }],
      },
      rendererValidator: async ({ value }: any) => {
        await sleep(50)
        if (value === 'warning') {
          return {
            status: 'warning',
            message: '警告信息',
            extra: { a: 0 },
          }
        }
        return {
          status: 'error',
          message: '错误信息',
          extra: { a: 0 },
        }
      },
      path: ['title'],
    }

    const r1 = await validateFormItem({ ...params, value: '我是标题哦~~~~' })
    expect(r1).toEqual({ status: 'error', message: '错误信息', extra: { a: 0 } })

    const r2 = await validateFormItem({ ...params, value: 'warning' })
    expect(r2).toEqual({ status: 'warning', message: '警告信息', extra: { a: 0 } })
  })
})

describe('makeOpenValidatorParams 验证', () => {
  const commonParams: any = {
    value: '标题',
    path: ['title'],
    rootValue: { title: 'title' },
    userCtx: { a: 0 },
  }
  const schemaTrue = { renderType: 'InputText', disabled: true }
  const schemaFalse = { renderType: 'InputText', disabled: false }

  test('全局 disabled 为 false 时，禁用态由 schema 的 disabled 确定', async () => {
    const r1 = makeOpenValidatorParams({ ...commonParams, schema: schemaFalse })
    expect(r1.disabled).toEqual(false)

    const r2 = makeOpenValidatorParams({ ...commonParams, schema: schemaTrue })
    expect(r2.disabled).toEqual(true)

    const r3 = makeOpenValidatorParams({
      ...commonParams,
      schema: schemaFalse,
      disabled: false,
    })
    expect(r3.disabled).toEqual(false)

    const r4 = makeOpenValidatorParams({
      ...commonParams,
      schema: schemaTrue,
      disabled: false,
    })
    expect(r4.disabled).toEqual(true)
  })

  test('schema 的 disabled 语句模型应该正确', async () => {
    const statementSchemaFalse = { renderType: 'InputText', disabled: '1 === 2' }
    const r1 = makeOpenValidatorParams({ ...commonParams, schema: statementSchemaFalse })
    expect(r1.disabled).toEqual(false)

    const statementSchemaTrue = { renderType: 'InputText', disabled: '1 === 1' }
    const r2 = makeOpenValidatorParams({ ...commonParams, schema: statementSchemaTrue })
    expect(r2.disabled).toEqual(true)
  })

  test('全局 disabled 为 true 时，权重大于 schema.disabled，应该返回禁用态', async () => {
    const r1 = makeOpenValidatorParams({
      ...commonParams,
      schema: schemaFalse,
      disabled: true,
    })
    expect(r1.disabled).toEqual(true)

    const r2 = makeOpenValidatorParams({
      ...commonParams,
      schema: schemaTrue,
      disabled: true,
    })
    expect(r2.disabled).toEqual(true)
  })
})
