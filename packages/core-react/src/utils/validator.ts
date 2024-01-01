import { EValidationStatus } from '../constants'
import type { IDeepReadonly, IObjectAny, IPath } from '../typings/common'
import type {
  ICore,
  IOpenFunctionValidatorResult,
  IOpenValidateError,
  IOpenValidateResult,
  IOpenValidatorParams,
  IRenderer,
} from '../typings/core'
import type { IRootContext } from '../typings/rootContext'
import type { IRuleItem, ISchema } from '../typings/schema'
import { find, get } from '../utils/tinyLodash'
import { templateCompiled } from './base'
import { isFunction } from './checking'
import { stringifyPath } from './misc'
import { matchRenderer } from './renderer'
import {
  isValidFunctionResult,
  isValidRules,
  normalizeRules,
  validateRules,
} from './schemaRulesValidator'
import { performStatementWithPath } from './statement'
import traverseSchema from './traverseSchema'

export type IValidateRootSchemaParams = Required<
  Pick<
    IRootContext,
    | 'rootSchema'
    | 'rootValue'
    | 'disabled'
    | 'readonly'
    | 'locale'
    | 'renderers'
    | 'rendererStorage'
    | 'validators'
    | 'userCtx'
  >
>

export async function validateRootSchema({
  rootSchema,
  rootValue,
  disabled,
  readonly,
  locale,
  renderers,
  rendererStorage,
  validators,
  userCtx,
}: IValidateRootSchemaParams): Promise<IOpenValidateResult> {
  const items: Promise<IOpenValidateError | void>[] = []

  traverseSchema<IRootContext['rootSchema']>(
    rootSchema,
    {
      $$: {
        enter({ schema, path }) {
          // 执行 hidden 语法
          const shouldHidden = performStatementWithPath({
            statement: schema.hidden,
            rootValue,
            path,
            userCtx,
          })

          if (shouldHidden) {
            return
          }

          const renderer = matchRenderer(renderers, schema.renderType)

          if (!renderer) {
            return
          }

          const handler = async () => {
            const value = get(rootValue, path)
            const validatorParams = makeOpenValidatorParams({
              schema,
              value,
              path,
              disabled,
              readonly,
              rootValue,
              locale,
              userCtx,
            })
            try {
              const { status, message, extra } = await validateFormItem({
                schema,
                rootValue,
                userCtx,
                path,
                locale,
                value,
                globalValidators: validators,
                rendererValidator: renderer.validator,
                rendererValidatorParams: validatorParams,
              })
              if (status !== EValidationStatus.success) {
                return { path, value, status, message, extra }
              }
            } catch (err: any) {
              return {
                path,
                value,
                status: EValidationStatus.error,
                message: `[CatchError]: ${err?.message}`,
              } as const
            }
          }

          items.push(handler())
        },
      },
      $$Object: {
        enter({ traverse }) {
          traverse()
        },
      },
    },
    { clone: false }
  )

  const errorList: IOpenValidateResult['errorList'] = []
  const warningList: IOpenValidateResult['warningList'] = []

  // 并发校验
  const emittingList = (await Promise.all(items).then((res) => {
    return res.filter((item) => {
      if (item?.status === EValidationStatus.error) {
        // 错误列表
        errorList.push(item)
      } else if (item?.status === EValidationStatus.warning) {
        // 警告列表
        warningList.push(item)
      }

      // 过滤校验通过的返回值，即 undefined
      return !!item
    })
  })) as IOpenValidateResult['errorList']

  // 通知渲染器展示错误或警告信息
  emittingList.forEach(({ status, path, message, extra }) => {
    const renderer = rendererStorage[stringifyPath(path)]
    renderer?.setValidatorState({
      status,
      message,
      extra,
    })
  })

  return {
    hasError: !!errorList.length,
    hasWarning: !!warningList.length,
    errorList,
    warningList,
  }
}

export interface IValidateFormItemParams extends IComposeSchemaRules {
  value: any
  globalValidators: ICore['validators']
  rendererValidator: IRenderer['validator']
  rendererValidatorParams: IOpenValidatorParams
}

export async function validateFormItem({
  schema,
  rootValue,
  userCtx,
  path,
  locale,
  value,
  globalValidators,
  rendererValidator,
  rendererValidatorParams,
}: IValidateFormItemParams): Promise<IOpenFunctionValidatorResult> {
  // 将 schema.required 添加到 rules 规则
  const rules = composeSchemaRules({
    schema,
    rootValue,
    path,
    locale,
    userCtx,
  })

  const commonValidateRulesParams = {
    value,
    globalValidators,
    globalValidatorParams: rendererValidatorParams,
    locale: locale.validation,
  }

  // 优先校验：通用 schema rules 校验
  // 如果成功，需要继续执行渲染器绑定的校验
  if (isValidRules(rules)) {
    const result = await validateRules({
      ...commonValidateRulesParams,
      rules,
    })
    if (result.status !== EValidationStatus.success) {
      return result
    }
  }

  // 渲染器内置校验（rules 规则）
  if (isValidRules(rendererValidator)) {
    const result = await validateRules({
      ...commonValidateRulesParams,
      rules: rendererValidator,
    })
    return result
  }

  // 渲染器内置校验（函数规则）
  if (isFunction(rendererValidator)) {
    const fnResult = await rendererValidator({
      ...rendererValidatorParams,
      value,
    })

    // 渲染器内置校验（返回值 rules 规则）
    if (isValidRules(fnResult)) {
      const result = await validateRules({
        ...commonValidateRulesParams,
        rules: fnResult,
      })
      return result
    }

    // 渲染器内置校验（返回值 SchemaRender 规则）
    if (isValidFunctionResult(fnResult)) {
      return {
        status: fnResult.status,
        message: fnResult.message,
        extra: fnResult.extra,
      }
    }
  }

  return { status: EValidationStatus.success }
}

export interface IComposeSchemaRules {
  schema: ISchema | IDeepReadonly<ISchema>
  rootValue: IObjectAny
  path: IPath
  locale: IRootContext['locale']
  userCtx: IObjectAny | undefined
}

/**
 * 将 schema.required 添加到 rules 规则
 */
function composeSchemaRules({
  schema,
  rootValue,
  path,
  locale,
  userCtx,
}: IComposeSchemaRules): IRuleItem[] {
  const rules = normalizeRules(schema.rules)
  const isRequired = performStatementWithPath({
    statement: schema.required,
    rootValue,
    path,
    userCtx,
  })

  if (isRequired && !find(schema.rules, { required: true })) {
    rules.unshift({
      required: true,
      message: templateCompiled(locale.validation.required, {
        label: schema.title,
      }),
    })
  }

  return rules
}

interface ICalcRequiredValueParams {
  schema: ISchema | IDeepReadonly<ISchema>
  rootValue: IObjectAny
  path: IPath
  userCtx: IObjectAny | undefined
}

/**
 * 获取 Schema required 的值，由以下两个协议确定
 * - schema.required 的值
 * - schema.rules 内 required 的值
 */
function calcRequiredValue({
  schema,
  rootValue,
  path,
  userCtx,
}: ICalcRequiredValueParams): boolean {
  const isRequired = performStatementWithPath({
    statement: schema.required,
    rootValue,
    path,
    userCtx,
  })

  if (isRequired) {
    return true
  }

  if (find(normalizeRules(schema.rules), { required: true })) {
    return true
  }

  return false
}

type IMakeOpenValidatorParams = Omit<IOpenValidatorParams, 'required' | 'sPath'>

export function makeOpenValidatorParams({
  schema,
  value,
  path,
  disabled,
  readonly,
  rootValue,
  locale,
  userCtx,
}: IMakeOpenValidatorParams): IOpenValidatorParams {
  // 优先使用全局禁用态、只读态
  let innerDisabled = !!disabled
  let innerReadonly = !!readonly

  // 已禁用的状态下，不需要执行语句，提升性能
  if (!innerDisabled) {
    innerDisabled = performStatementWithPath({
      statement: schema.disabled,
      rootValue,
      path,
      userCtx,
    })
  }

  // 只读态处理
  if (!innerReadonly) {
    innerReadonly = performStatementWithPath({
      statement: schema.readonly,
      rootValue,
      path,
      userCtx,
    })
  }

  // 是否必填
  const required = calcRequiredValue({
    schema,
    path,
    rootValue,
    userCtx,
  })

  return {
    schema,
    value,
    path: [...path],
    sPath: stringifyPath(path),
    required,
    disabled: innerDisabled,
    readonly: innerReadonly,
    rootValue,
    locale,
    userCtx,
  }
}
