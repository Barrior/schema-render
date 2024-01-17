import type { IClassNamesParams } from '../utils/classnames'
import type { IDictionary, IObjectAny, IPath } from './common'
import type { ICore, IOpenFunctionValidatorResult } from './core'
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

export interface IRootContext {
  // 根 schema
  rootSchema: IRootSchema
  // 全量配置数据
  rootValue: IObjectAny
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
  // 储存展示的渲染器
  rendererStorage: IDictionary<IRendererInstance>
  // 全局校验器
  validators: Exclude<ICore['validators'], undefined>
  // 全局上下文数据
  userCtx: ICore['userCtx']
  // 表单布局
  layout: ICore['layout']
  // 表单项布局
  itemLayout: ICore['itemLayout']
  // 国际化
  locale: Exclude<ICore['locale'], undefined>
  // 错误提示
  catchErrorTips?: ICore['catchErrorTips']

  /* 事件 */
  // value 值改变事件
  onChange: (e: IChangeEvent) => void

  /* 方法 */
  // 加入 prefixCls 前缀的样式方法
  prefixClassNames: (...args: IClassNamesParams) => string
}
