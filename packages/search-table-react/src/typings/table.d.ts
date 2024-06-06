import type { IMaybePromise, IObjectAny } from '@schema-render/core-react'
import type { ButtonProps, PopconfirmProps, Table } from 'antd'
import type { ColumnType } from 'antd/es/table'
import type { ComponentProps, MouseEvent, ReactNode } from 'react'

export type IColumnType = ColumnType<IObjectAny> & {
  /**
   * 子节点
   */
  children?: IColumnType[]
  /**
   * 是否可以复制
   */
  // copyable?: boolean
  /**
   * 数据类型/格式，标记以特定类型 UI 渲染改数据, dataFormat
   */
  // valueType?: 'code' | 'tags' | 'comma-number' | 'image' | 'status'
}

export type IAntdTableProps = ComponentProps<typeof Table>

export type ITableProps = IAntdTableProps & {
  /**
   * 是否展示序号列（行号）
   */
  showRowNumber?: boolean
  /**
   * 序号列 Antd 配置数据
   */
  rowNumberColumnData?: Partial<ColumnType<IObjectAny>>
  /**
   * 操作列按钮内容，不存在则不展示操作列，按钮超过设定则自动下拉交互
   * @param record 当前行数据
   * @param index 当前列的索引
   */
  actionItems?: (record: IObjectAny, index: number) => IActionItem[]
  /**
   * 操作列按钮下拉交互最大数量，默认为 2，超过将以下拉菜单的方式交互
   */
  actionItemsCount?: number
  /**
   * 操作列 Antd 配置数据，可配置操作列宽度等
   */
  actionItemsColumnData?: Partial<ColumnType<IObjectAny>>
  /**
   * 自动计算表格 scrollY 属性，达到自动适配屏幕高度的效果
   */
  autoScrollY?: boolean
}

/**
 * 操作栏按钮配置项
 */
export interface IActionItem extends Omit<Partial<ButtonProps>, 'onClick' | 'loading'> {
  /**
   * 操作文案
   */
  text?: string
  /**
   * 是否展示
   */
  isShow?: boolean
  /**
   * 是否增加「二次确认」
   */
  confirmAgain?: boolean
  /**
   * 二次确认 Antd 属性
   */
  confirmProps?: Partial<Omit<PopconfirmProps, 'onConfirm'>>
  /**
   * 按钮权限
   */
  // authKeys?: string | string[]
  /**
   * 按钮点击事件，二次确认时，则是二次确认后的事件
   * 返回 Promise 类型，则增加 loading 效果
   */
  onClick?: (event: MouseEvent<HTMLElement, MouseEvent>) => IMaybePromise<void>
  /**
   * 自定义渲染
   * @param record 当前行数据
   */
  render?: () => ReactNode
}
