import { createContext } from 'react'

import type { IPath } from './typings/common'

export interface IFieldPathContext {
  /* 当前渲染器组件所属字段的 path */
  path: IPath
  /* 渲染器类型（schema.renderType），用于开发日志定位组件 */
  renderType?: string
}

/**
 * 当前渲染器组件所属字段的上下文。
 * 供 useFieldValue 在开发日志里标出「哪个组件的哪个字段订阅了哪个字段」。
 */
const FieldPathContext = createContext<IFieldPathContext | null>(null)

export default FieldPathContext
