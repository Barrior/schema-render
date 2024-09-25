import type { IMaybePromise, IObjectAny } from '@schema-render/core-react'
import type { ButtonProps, DropDownProps, PopconfirmProps, Table } from 'antd'
import type { ColumnType } from 'antd/es/table'
import type { ComponentProps, MouseEvent, ReactNode } from 'react'

type IValueType<T extends string = ''> =
  | 'code'
  | 'rate'
  | 'comma-number'
  | 'switch'
  | 'percent'
  | 'images'
  | 'tags'
  | 'long-text'
  | 'long-text-modal'
  | T

/**
 * 增强版列配置
 */
export type IColumnType<VT extends string = ''> = ColumnType<IObjectAny> & {
  /**
   * 子节点
   */
  children?: IColumnType<VT>[]
  /**
   * 排序类型
   */
  sortType?: 'string' | 'number' | 'date'
  /**
   * 排序数据取值函数
   * @param record 数据行
   * @returns 排序数据值
   */
  sortDataExtractor?: (record: IObjectAny) => string | number | void
  /**
   * 是否开启复制功能，会增加复制 icon
   */
  // copyable?: boolean | 'icon' | 'click' | 'double-click'
  /**
   * 数据显示类别，标记以特定类型 UI 渲染该数据
   */
  valueType?:
    | IValueType<VT>
    | ((
        record: IObjectAny,
        index: number
      ) => {
        type: IValueType<VT>
        [attr: string]: any
      })
}

export type IAntdTableProps = ComponentProps<typeof Table>

export type ITableProps = Omit<IAntdTableProps, 'columns'> & {
  /**
   * 增强版列配置
   */
  columns?: IColumnType<string>[]
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
   * 操作按钮下拉菜单属性
   */
  actionItemsDropdownProps?: DropDownProps
  /**
   * 操作列 Antd 配置数据，可配置操作列宽度等
   */
  actionItemsColumnData?: Partial<ColumnType<IObjectAny>>
  /**
   * 自动计算表格 scrollY 属性，达到自动适配屏幕高度的效果
   */
  autoScrollY?: boolean
  /**
   * 合计栏
   */
  summaryText?: ReactNode
  /**
   * 注册 valueType, 同名将覆盖
   */
  registerValueType?: {
    [type: string]: (data: {
      value: any
      record: IObjectAny
      options: IObjectAny
      index: number
    }) => ReactNode
  }

  /**
   * 排序方案
   * - local：前端排序
   * - local-all：前端排序，所有字段都排序
   * - service：后端排序
   * - service-all：后端排序，所有字段都排序
   */
  sortMode?: 'local' | 'local-all' | 'service' | 'service-all'
  /**
   * 排序字符串数据转换方案
   * @param value 字符串数据值
   */
  sortStringValueTransform?: (value: string) => string
}

/**
 * 表格 onChange 事件函数参数
 */
export type ITableOnChangeParams = Parameters<Required<ITableProps>['onChange']>

/**
 * 操作栏按钮配置项
 */
export interface IActionItem extends Omit<Partial<ButtonProps>, 'onClick' | 'loading'> {
  /**
   * 操作文案
   */
  text?: string | ReactNode
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
  onClick?: (event: MouseEvent<HTMLElement, MouseEvent>) => IMaybePromise<unknown>
}
