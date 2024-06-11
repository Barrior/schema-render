import type { IObjectAny } from '@schema-render/core-react'
import { useMemoizedFn } from '@schema-render/core-react'
import { useMemo } from 'react'

import { EColumnsKeys } from '../../constants'
import type { ISearchTableProps } from '../../typings/index.d'
import type { IColumnType } from '../../typings/table'
import { createActions, processRawColumns } from './helpers'

interface IUseColumnsParams {
  table: ISearchTableProps['table']
}

export default function useColumns({ table }: IUseColumnsParams) {
  const {
    columns = [],
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
  } = table

  // 原始列数据
  const rawColumns = columns

  /**
   * 操作栏渲染
   */
  const actionsRender = useMemoizedFn(
    (_text: string, record: IObjectAny, index: number) => {
      return createActions({ record, index, actionItems, actionItemsCount })
    }
  )

  const finalColumns = useMemo(() => {
    const columns = processRawColumns(rawColumns)

    // 添加序号栏
    if (showRowNumber) {
      columns.unshift({
        title: '序号',
        align: 'center',
        width: 60,
        fixed: 'left',
        render: (_t: string, _r: object, index: number) => index + 1,
        key: EColumnsKeys.rowNumber,
        ...rowNumberColumnData,
      } as never)
    }

    // 添加操作栏
    if (actionItems) {
      columns.push({
        title: '操作',
        align: 'center',
        fixed: 'right',
        width: 120,
        render: actionsRender,
        key: EColumnsKeys.actions,
        ...actionItemsColumnData,
      } as never)
    }

    return columns as IColumnType[]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rawColumns])

  return { finalColumns }
}
