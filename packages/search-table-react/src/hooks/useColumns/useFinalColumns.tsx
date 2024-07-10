import type { IObjectAny } from '@schema-render/core-react'
import { useMemoizedFn } from '@schema-render/core-react'
import { useMemo } from 'react'

import { EColumnsKeys } from '../../constants'
import type { ISearchTableProps } from '../../typings/index.d'
import type { IColumnType } from '../../typings/table'
import { createActions } from './helpers/actions'

interface IParams {
  table: ISearchTableProps['table']
  sortColumns: IColumnType<any>[]
}

/**
 * 1、过滤未展示的列
 * 2、添加序号列、操作列
 */
export default function useFinalColumns({ table, sortColumns }: IParams) {
  const {
    // 是否展示行号
    showRowNumber = false,
    // 序号栏 Antd 配置数据，如宽度，类名等
    rowNumberColumnData = {},
    // 操作栏渲染函数
    actionItems,
    // 操作栏按钮计数，超过此个数以“更多”交互展示
    actionItemsCount = 2,
    // 操作栏 Antd 配置数据，如宽度，类名等
    actionItemsColumnData = {},
    // 操作栏下拉菜单配置
    actionItemsDropdownProps,
  } = table

  /**
   * 操作栏渲染
   */
  const actionsRender = useMemoizedFn(
    (_text: string, record: IObjectAny, index: number) => {
      return createActions({
        record,
        index,
        actionItems,
        actionItemsCount,
        actionItemsDropdownProps,
      })
    }
  )

  /**
   * 可显示的列处理
   */
  const displayedColumns = useMemo(
    // 过滤隐藏列
    () => sortColumns.filter((item) => !item.hidden),
    [sortColumns]
  )

  const finalColumns = useMemo(() => {
    const columns = [...displayedColumns]

    // 添加序号栏
    if (showRowNumber) {
      columns.unshift({
        title: '序号',
        align: 'center',
        width: 70,
        fixed: 'left',
        render: (_t: string, _r: object, index: number) => index + 1,
        key: EColumnsKeys.rowNumber,
        ...rowNumberColumnData,
      })
    }

    // 添加操作栏
    if (actionItems) {
      columns.push({
        title: '操作',
        align: 'center',
        fixed: 'right',
        width: 134,
        render: actionsRender,
        key: EColumnsKeys.actions,
        ...actionItemsColumnData,
      })
    }

    return columns
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayedColumns])

  return { finalColumns }
}
