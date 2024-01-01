import { EValidationStatus, VALID_VALIDATION_STATUS } from '../constants'
import type { IDeepReadonly, IObjectAny } from '../typings/common'
import type {
  ICore,
  IOpenFunctionValidatorResult,
  IOpenValidatorParams,
} from '../typings/core'
import type { IBaseSchema, IRuleItem } from '../typings/schema'
import { createRegExpByString, hasOwnProperty, templateCompiled } from './base'
import {
  isArray,
  isBoolean,
  isFunction,
  isNumber,
  isPlainObject,
  isString,
} from './checking'
import { pick } from './tinyLodash'

export interface IParams {
  value: any
  rules: IBaseSchema['rules'] | IDeepReadonly<IBaseSchema['rules']>
  globalValidators: ICore['validators'] | undefined
  globalValidatorParams: IOpenValidatorParams | undefined
  locale: Required<ICore>['locale']['validation']
}

export interface IValidationError extends IOpenFunctionValidatorResult {
  [key: string]: any
}

export class SchemaRulesValidator {
  static failUK = typeof Symbol === 'function' ? Symbol('SRV') : '$$SRV'

  static isValidationError(err: any): err is IValidationError {
    return isPlainObject(err) && hasOwnProperty(err, SchemaRulesValidator.failUK)
  }

  static fail(data: any): never {
    const result = { [SchemaRulesValidator.failUK]: true } as IValidationError

    if (isString(data)) {
      result.message = data
    } else if (isPlainObject(data)) {
      Object.assign(result, pick(data, 'status', 'message', 'extra'))
    }

    if (!result.status) {
      result.status = EValidationStatus.error
    }

    throw result
  }

  private value: IParams['value']

  private rules: IParams['rules']

  private locale!: IParams['locale']

  private globalValidators: IParams['globalValidators']

  private globalValidatorParams: IParams['globalValidatorParams']

  constructor(params: IParams) {
    Object.assign(this, params)
  }

  public setValue(value: IParams['value']): void {
    this.value = value
  }

  public async validate(): Promise<IOpenFunctionValidatorResult> {
    return await this.validateRules(this.rules)
  }

  private async validateRules(
    rules: IParams['rules']
  ): Promise<IOpenFunctionValidatorResult> {
    try {
      const innerRules = normalizeRules(rules)

      for (const rule of innerRules) {
        if (isPlainObject(rule)) {
          this.validateRuleItem(rule)
          await this.validateGlobal(rule)
        }
      }
    } catch (err: any) {
      if (SchemaRulesValidator.isValidationError(err)) {
        return pick(err, 'status', 'message', 'extra')
      }
      return {
        status: EValidationStatus.error,
        message: err?.message ? err.message : 'CatchError',
      }
    }
    return { status: EValidationStatus.success }
  }

  // rule 规则
  private validateRuleItem(rule: IRuleItem) {
    const required = isBoolean(rule.required) ? rule.required : undefined
    const len = isNumber(rule.len) ? rule.len : undefined
    const min = isNumber(rule.min) ? rule.min : undefined
    const max = isNumber(rule.max) ? rule.max : undefined

    const fail = SchemaRulesValidator.fail
    const { value, locale } = this

    if (required && [undefined, null].includes(value)) {
      SchemaRulesValidator.fail(rule.message)
    }

    if (
      (rule.type === 'string' && !isString(value)) ||
      (rule.type === 'number' && !isNumber(value)) ||
      (rule.type === 'boolean' && !isBoolean(value)) ||
      (rule.type === 'object' && !isPlainObject(value)) ||
      (rule.type === 'array' && !isArray(value))
    ) {
      fail(templateCompiled(locale.typeError, { type: rule.type }))
    }

    // Handle string
    if (isString(value)) {
      const regexp = createRegExpByString(rule.pattern)

      if (
        (required && value === '') ||
        (len && value.length !== len) ||
        (min && value.length < min) ||
        (max && value.length > max) ||
        (regexp && !regexp.test(value))
      ) {
        fail(rule.message)
      }
    }

    // Handle number
    if (isNumber(value)) {
      if ((len && value !== len) || (min && value < min) || (max && value > max)) {
        fail(rule.message)
      }
    }

    // Handle array
    if (isArray(value)) {
      if (
        (required && value.length === 0) ||
        (len && value.length !== len) ||
        (min && value.length < min) ||
        (max && value.length > max)
      ) {
        fail(rule.message)
      }
    }
  }

  // 全局校验器规则
  private async validateGlobal(rule: IRuleItem) {
    const name = rule.validator
    const { globalValidators, globalValidatorParams } = this

    if (!name || !globalValidators || !globalValidatorParams) {
      return
    }

    const gValidator = globalValidators[name]
    const maybeFail = (result: IObjectAny) => {
      if (result.status !== EValidationStatus.success) {
        SchemaRulesValidator.fail(result)
      }
    }

    // rules 规则
    if (isValidRules(gValidator)) {
      // 移除 validator 字段，避免陷入死循环
      const result = await this.validateRules(gValidator.filter((o) => !o.validator))
      maybeFail(result)
    }

    // 函数校验器
    if (isFunction(gValidator)) {
      const fnResult = await gValidator({ ...globalValidatorParams, value: this.value })

      // rules 规则
      if (isValidRules(fnResult)) {
        const result = await this.validateRules(fnResult.filter((o) => !o.validator))
        maybeFail(result)
      }

      // 函数返回值规则
      if (isValidFunctionResult(fnResult)) {
        maybeFail({
          status: fnResult.status,
          // 优先使用 rule 指定的错误提示信息
          message: rule.message ?? fnResult.message,
          extra: fnResult.extra,
        })
      }
    }
  }
}

export function isValidFunctionResult(
  result: any
): result is IOpenFunctionValidatorResult {
  return VALID_VALIDATION_STATUS.includes(result?.status)
}

export function isValidRules(rules: any): rules is IRuleItem[] {
  return isArray(rules) && !!rules.length
}

export function normalizeRules(rules: any): IRuleItem[] {
  const resultRules = []

  if (isPlainObject(rules)) {
    resultRules.push(rules)
  } else if (isArray(rules)) {
    resultRules.push(...rules)
  }

  return resultRules
}

export function validateRules(params: IParams) {
  const validator = new SchemaRulesValidator(params)
  return validator.validate()
}
