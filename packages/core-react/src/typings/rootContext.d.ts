import type { IClassNamesParams } from '../utils/classnames'
import type { IDictionary, IObjectAny, IPath } from './common'
import type { ICore, IInternalLocale, IOpenFunctionValidatorResult } from './core'
import type { IRootSchema } from './schema'

export interface IChangeEvent {
  path: IPath
  value: any
  extra?: any
}

export interface IRendererInstance {
  setValidatorState: (state: IOpenFunctionValidatorResult) => void
  getRootElement: () => HTMLDivElement | null
}

/**
 * 静态配置：不随表单数据变化，值可以跨渲染复用，
 * 只消费这部分的上游组件在数据变化时不会被通知重渲染。
 */
export interface IRootStaticContext {
  // 根 schema
  rootSchema: IRootSchema
  // 是否禁用
  disabled: boolean
  // 是否只读
  readonly: boolean
  // 样式类名前缀
  prefixCls: string
  // 对象类型样式
  objectStyle: IObjectAny
  // 渲染器列表
  renderers: ICore['renderers']
  // 全局校验器
  validators: Exclude<ICore['validators'], undefined>
  // 全局上下文数据
  userCtx: ICore['userCtx']
  // 表单布局
  layout: ICore['layout']
  // 表单项布局
  itemLayout: ICore['itemLayout']
  // 国际化
  locale: IInternalLocale
  // 错误提示
  catchErrorTips?: ICore['catchErrorTips']

  /* 方法 */
  // 加入 prefixCls 前缀的样式方法
  prefixClassNames: (...args: IClassNamesParams) => string
}

/**
 * 动态数据：随表单数据变化，每次 value 变更都会产生新的引用。
 * 只有需要「数据一变就重渲染」的组件才订阅它（如渲染迭代器），
 * 字段级组件请用 IRootActionsContext 的 getRootValue() 非订阅读取。
 */
export interface IRootValueContext {
  // 全量配置数据
  rootValue: IObjectAny
}

/**
 * 稳定动作：引用跨渲染不变，订阅它不会因数据变化而重渲染
 */
export interface IRootActionsContext {
  // 储存展示的渲染器
  rendererStorage: IDictionary<IRendererInstance>

  /* 事件 */
  // value 值改变事件
  onChange: (e: IChangeEvent) => void

  /* 方法 */
  // 读取最新的全量数据（非订阅）
  getRootValue: () => IObjectAny
  // 订阅指定路径的数据变化（paths 为 null 表示订阅整个 rootValue）；
  // listener 收到「本次变化、且属于该订阅范围的路径」，null 表示变更路径未知
  subscribeValue: (
    paths: IPath[] | null,
    listener: (changedPaths: IPath[] | null) => void
  ) => () => void
}

/**
 * 合并视图：给命令式 API（rootContextRef）使用
 */
export interface IRootContext
  extends IRootStaticContext,
    IRootValueContext,
    IRootActionsContext {}
