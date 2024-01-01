import type { IPartRequired } from '@schema-render/core-react'
import type { IFormRenderProps, IFormRenderRef } from '@schema-render/form-render-react'

import type { ISearchDefaultProps } from '../constants'
import type zh_CN from '../locale/zh_CN'

export type ILocale = typeof zh_CN

/**
 * Search 参数配置
 */
export interface ISearchProps extends Omit<IFormRenderProps, 'locale'> {
  /**
   * 国际化
   */
  locale?: ILocale

  /**
   * 是否默认折叠
   */
  defaultCollapsed?: boolean

  /**
   * 是否折叠，受控模式
   */
  // collapsed?: boolean

  /**
   * 折叠行数，默认 2 行
   */
  collapsedRows?: number

  /**
   * 计算折叠时展示的表单项个数的算法
   * @param container 表单容器
   * @returns 折叠时展示的表单项个数，必须是整数
   */
  calcCollapsedNumber?: (container?: HTMLElement | null) => number

  /**
   * 「折叠/展开」切换事件
   * @param isCollapsed 是否折叠
   */
  onToggleCollapsed?: (isCollapsed: boolean) => void
}

/**
 * 合并默认值后的 Search 参数
 */
export type IInnerSearchProps = IPartRequired<ISearchProps, keyof ISearchDefaultProps>

/**
 * Search Ref
 */
export type ISearchRef = IFormRenderRef
