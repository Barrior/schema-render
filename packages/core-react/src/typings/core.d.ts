import type React from 'react'
import type { ReactNode } from 'react'

import type { ILayout, IValidationStatus } from '../constants'
import type localeStruct from '../locale/zh_CN'
import type {
  IDeepReadonly,
  IDictionary,
  IMaybePromise,
  IObjectAny,
  IPath,
  IWindow,
} from './common'
import type { IChangeEvent, IRendererInstance, IRootContext } from './rootContext'
import type { IRootSchema, IRuleItem, ISchema } from './schema'

export interface IItemChangeEvent extends IChangeEvent {
  /**
   * 字符串化路径
   */
  sPath: string
}

export interface ICore {
  /* 核心参数 */
  /**
   * 表单默认值
   */
  defaultValue?: IObjectAny
  /**
   * 表单数据
   */
  value?: IObjectAny
  /**
   * 表单描述协议
   */
  schema: IRootSchema
  /**
   * 数据变化监听，用于数据联动处理
   */
  watch?: IDictionary<(value: IObjectAny, e: IItemChangeEvent) => void>
  /**
   * 数据变化事件
   * @param value 全量表单数据
   * @param e 事件对象
   */
  onChange?: (value: IObjectAny, e: IItemChangeEvent) => void
  /**
   * 表单项数据变化事件
   * @param e 事件对象
   */
  onItemChange?: (e: IItemChangeEvent) => void

  /* UI 型参数 */
  /**
   * 样式类名前缀，默认为 schema-render
   */
  prefixCls?: string
  /**
   * 根节点类名
   */
  className?: string
  /**
   * 根节点样式
   */
  style?: React.CSSProperties
  /**
   * 整体表单布局结构
   */
  layout?: ILayout
  /**
   * 布局内每个表单项列间距，对应 grid-column-gap
   */
  layoutColumnGap?: number
  /**
   * 布局内每个表单项行间距，对应 grid-row-gap
   */
  layoutRowGap?: number
  /**
   * 当 layout 为 autoFill、autoFit 时生效，定义表单项最小宽度与最大宽度
   */
  layoutMinMax?: [string | number, string | number]

  /**
   * 表单项布局结构
   */
  itemLayout: React.ComponentType<IOpenItemLayoutParams>

  /* 国际化 */
  locale?: typeof localeStruct

  /* 功能型参数 */
  /**
   * 禁用态，是否禁用，权重大于 schema 的 disabled 属性
   */
  disabled?: boolean
  /**
   * 只读态，是否只读
   */
  readonly?: boolean
  /**
   * 渲染器列表
   */
  renderers: IRenderers
  /**
   * 全局校验器
   */
  validators?: IValidators
  /**
   * 全局上下文信息
   */
  userCtx?: IObjectAny

  /**
   * 捕获错误的提示信息，默认标红提示错误
   * - 传入函数则自定义错误信息
   * - 传入 silent 则不提示错误
   */
  catchErrorTips?: 'silent' | ((e: Error) => ReactNode)
}

// 开放表单项布局结构参数
export interface IOpenItemLayoutParams
  extends Pick<
    IOpenComponentParams,
    'schema' | 'required' | 'disabled' | 'readonly' | 'validator' | 'locale' | 'userCtx'
  > {
  /* 渲染器组件 */
  body: React.ReactNode
  /* 类名工具函数：对 classnames 包的封装，带有 prefixCls 类名前缀 */
  prefixClassNames: IRootContext['prefixClassNames']
}

export interface IValidators<V extends any = any, S extends ISchema = ISchema> {
  [name: string]: IRenderer<V, S>['validator']
}

export interface IOpenValidateError extends IOpenFunctionValidatorResult {
  path: IPath
  value: any
}

export interface IOpenValidateResult {
  // 是否存在错误
  hasError: boolean
  // 是否存在警告
  hasWarning: boolean
  // 错误列表
  errorList: IOpenValidateError[]
  // 警告列表
  warningList: IOpenValidateError[]
}

export interface IScrollToOptions {
  /**
   * 滚动过渡行为 'smooth' | 'instant' | 'auto'
   * https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollTo#behavior
   */
  behavior?: 'smooth'
  /**  是否触发 x 轴移动，默认 true */
  xAxis?: boolean
  /**  是否触发 y 轴移动，默认 true */
  yAxis?: boolean
  /** 移动到指定位置的间隙，可以是正负值，默认为 0 */
  gap?: number
  /** 指定 “定位元素”，适用于外部滚动  */
  positionedElement?: HTMLElement | IWindow | null
}

export interface ICoreRef {
  /**
   * 校验数据
   */
  validate: () => Promise<IOpenValidateResult>
  /**
   * 重置错误信息（含警告信息），当数据回填时，可以用此方法重置错误信息
   */
  resetError: (paths?: string | string[]) => void
  /**
   * 获取表单数据
   */
  getValue: () => IObjectAny
  /**
   * 设置表单数据
   */
  setValue: (value: IObjectAny) => void
  /**
   * 重置数据
   */
  resetValue: () => void
  /**
   * 获取根节点元素
   */
  getRootElement: () => HTMLDivElement | null
  /**
   * 查找指定表单项，返回表单项实例的开放 API
   */
  findItem: (paths?: string | string[]) => IRendererInstance | undefined
  /**
   * 滚动到指定表单项
   * @param paths 表单项路径
   * @param options 滚动参数
   */
  scrollTo: (paths?: string | string[], options?: IScrollToOptions) => void
}

export interface IRenderers<V extends any = any, S extends ISchema = ISchema> {
  [type: string]: IRenderer<V, S>
}

// 开放渲染器
export interface IRenderer<V extends any = any, S extends ISchema = ISchema> {
  /** 渲染器组件 component 模式 */
  component?: React.ComponentType<IOpenComponentParams<V, S>>
  /** 只读态 component */
  readonlyComponent?: React.ComponentType<IOpenComponentParams<V, S>>
  /** 渲染器组件 formItem 模式：自定义渲染内容，覆盖 itemLayout 布局 */
  formItem?: React.ComponentType<IOpenFormItemParams<V, S>>
  /** 只读态 formItem */
  readonlyFormItem?: React.ComponentType<IOpenFormItemParams<V, S>>
  /** 校验器 */
  validator?: IRuleItem[] | IOpenFunctionValidator<V, S>
}

// 开放校验器
export type IOpenFunctionValidator<V extends any = any, S extends ISchema = ISchema> = (
  IParams: IOpenValidatorParams<V, S>
) => IMaybePromise<IRuleItem[] | IOpenFunctionValidatorResult | void>

// 函数校验器返回结果
export interface IOpenFunctionValidatorResult {
  status: IValidationStatus
  message?: string
  extra?: IObjectAny
}

// 开放渲染器参数 formItem 模式
export type IOpenFormItemParams<
  V extends any = any,
  S extends ISchema = ISchema
> = IOpenComponentParams<V, S>

export interface IOpenChangeOptions {
  // 是否触发校验器
  triggerValidator?: boolean
  // 额外信息
  extra?: any
}

// 开放渲染器参数 component 模式
export interface IOpenComponentParams<V extends any = any, S extends ISchema = ISchema>
  extends IOpenValidatorParams<V, S> {
  // 对象类型样式
  objectStyle: IObjectAny
  // 校验器信息，包含校验状态、提示消息与附加数据
  validator: IDeepReadonly<IOpenFunctionValidatorResult>
  // 值回调事件
  onChange: (value: V | undefined, options?: IOpenChangeOptions) => void
}

// 开放校验器参数
export interface IOpenValidatorParams<V extends any = any, S extends ISchema = ISchema>
  extends Pick<IRootContext, 'rootValue' | 'userCtx'> {
  // 渲染器 schema
  schema: S
  // 渲染器 value
  value: V | undefined
  // 渲染器路径
  path: IPath
  // 渲染器路径字符串化表示
  sPath: string
  // 是否必填，表达式执行的结果
  required: boolean
  // 是否禁用，表达式执行与全局状态控制的结果
  disabled: boolean
  // 是否只读，表达式执行与全局状态控制的结果
  readonly: boolean
  // 国际化 - 当前语言
  locale: ICore['locale'] & IObjectAny
}
