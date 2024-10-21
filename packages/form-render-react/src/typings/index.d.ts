import type {
  IBaseSchema,
  ICore,
  ICoreRef,
  IDeepWriteable,
  IMaybePromise,
  IObjectAny,
  IOpenItemLayoutParams,
  IPartPartial,
  IPartRequired,
  IRootSchema,
} from '@schema-render/core-react'
import type { CSSProperties, ReactNode } from 'react'

import type {
  FORM_RENDER_DEFAULT_PROPS,
  IAction,
  IActionsLoading,
  IActionsRenderMode,
} from '../constants'
import type zh_CN from '../locale/zh_CN'
import type { IBuiltinRenderers } from '../renderers'

type ILocale = typeof zh_CN

/**
 * 注册表单行为函数的参数
 */
export interface IRegisterActionsFnParams<T extends IObjectAny = ILocale> {
  /** 当值为 submit 时，存在该事件 */
  handleSubmit?: () => void
  /** 当值为 reset 时，存在该事件 */
  handleReset?: () => void
  /** submit 与 reset 按钮的 loading 状态 */
  loading: IActionsLoading
  /** 全局禁用状态，@schema-render/core-react global-status  */
  disabled?: boolean
  /* 语言 */
  locale: T
}

/**
 * 注册表单行为函数
 */
export type IRegisterActionsFn<T extends IObjectAny = ILocale> = (
  p: IRegisterActionsFnParams<T>
) => ReactNode

/**
 * 注册操作行为，如果是 submit、reset 将覆盖原有样式
 */
export interface IRegisterActions<T extends IObjectAny = ILocale> {
  [actionName: string]: IRegisterActionsFn<T>
}

/**
 * 自定义 label 渲染
 */
export type ILabelRender = (
  p: Pick<
    IOpenItemLayoutParams,
    'schema' | 'required' | 'readonly' | 'disabled' | 'userCtx' | 'prefixClassNames'
  > & {
    locale: ILocale
    labelWidth?: number | string
    labelColon?: ReactNode
    labelGap?: number
  }
) => ReactNode

/**
 * FormRender 参数配置
 */
export type IFormRenderProps = IPartPartial<
  Omit<ICore, 'itemLayout' | 'locale' | 'schema'>,
  'renderers'
> & {
  /**
   * 表单描述协议，带内置渲染器类型提示
   */
  schema: IFormRenderRootSchema

  /**
   * FormRender 根节点样式名
   */
  rootClassName?: string

  /**
   * FormRender 根节点样式
   */
  rootStyle?: CSSProperties

  /**
   * 只读状态没有数据时的占位符，默认 “-”
   * 空数据：null、undefined 和空字符串
   */
  readonlyPlaceholder?: ReactNode

  /**
   * 表单项布局结构
   */
  itemLayout?: 'horizontal' | 'vertical' | ICore['itemLayout']

  /**
   * 表单标签（标题块）宽度
   */
  labelWidth?: number | string
  /**
   * 标签冒号，默认没有冒号
   */
  labelColon?: ReactNode
  /**
   * 标签与右侧内容的间距
   */
  labelGap?: number
  /**
   * 自定义 label 渲染
   */
  labelRender?: ILabelRender

  /**
   * 国际化
   */
  locale?: ILocale

  /**
   * 定义操作行为：展示项、顺序
   */
  actions?: IAction[]
  /**
   * @private 内部使用，操作行为渲染模式
   * normal: 标准渲染，作为独立节点渲染在 Form 底部
   * formItem: 作为表单项渲染，提供给 @schema-render/search-react 用
   */
  actionsRenderMode?: IActionsRenderMode
  /**
   * @private 内部使用，定义操作行为 Schema，如样式等
   * 提供给 @schema-render/search-react 用
   */
  actionsRestSchema?: Partial<IBaseSchema>
  /**
   * 当操作行为按钮处于 loading 状态时，是否禁用表单
   */
  disableFormOnActionLoading?: boolean
  /**
   * 触发 onSubmit 事件前是否执行表单校验，默认为 true，校验不通过将不会触发 onSubmit 事件
   */
  validateFormOnSubmit?: boolean
  /**
   * 注册操作行为，如果是 submit、reset 将覆盖原有样式
   */
  registerActions?: IRegisterActions<ILocale & IObjectAny>
  /**
   * 提交事件
   * @param value 表单数据
   */
  onSubmit?: (value: IObjectAny) => IMaybePromise<void>
  /**
   * 重置前置事件
   * @param value 表单数据
   * @returns 如果返回数据，则作为新数据填入表单
   */
  onBeforeReset?: (value: IObjectAny) => IMaybePromise<IObjectAny | void>
  /**
   * 重置事件
   * @param value 重置后的表单数据
   */
  onReset?: (value: IObjectAny) => IMaybePromise<void>
}

/**
 * 默认参数类型
 */
export type IFormRenderDefaultProps = IDeepWriteable<typeof FORM_RENDER_DEFAULT_PROPS>

/**
 * 内部 FormRender 参数，合并默认值后的结果
 */
export type IInnerFormRenderProps = IPartRequired<
  IFormRenderProps,
  keyof IFormRenderDefaultProps
>

/**
 * FormRender 引用
 */
export type IFormRenderRef = ICoreRef

/**
 * FormRender 上下文数据
 */
export type IFormRenderContext = Pick<
  IInnerFormRenderProps,
  | 'labelWidth'
  | 'labelGap'
  | 'labelColon'
  | 'labelRender'
  | 'actions'
  | 'registerActions'
  | 'layoutColumnGap'
  | 'layoutRowGap'
  | 'readonlyPlaceholder'
> & {
  locale: ILocale
  actionsLoading: IActionsLoading
  handleSubmit: Required<IRegisterActionsFnParams>['handleSubmit']
  handleReset: Required<IRegisterActionsFnParams>['handleReset']
}

/**
 * FormRender Root Schema 类型，含内置渲染器提示
 */
export type IFormRenderRootSchema<T extends string = ''> = IRootSchema<
  T | IBuiltinRenderers
>
