import type { IObjectAny } from '@schema-render/core-react'
import { useMemoizedFn, utils } from '@schema-render/core-react'
import { Table } from 'antd'
import type { Ref } from 'react'
import { forwardRef, useEffect, useRef } from 'react'

import { EClassNames } from './constants'
import { useBaseColumns, useFinalColumns, useSortColumns } from './hooks/useColumns'
import useOpenApi from './hooks/useOpenApi'
import useRequest from './hooks/useRequest'
import useScrollY from './hooks/useScrollY'
import useSearch from './hooks/useSearch'
import useSummary from './hooks/useSummary'
import useTitle from './hooks/useTitle'
import type { IGlobalState, ISearchTableProps, ISearchTableRef } from './typings/index.d'
import type { ITableProps } from './typings/table'

const { classNames, isPlainObject } = utils

/**
 * 备注：
 * rawColumns: 原始列
 * baseColumns: 基于 rawColumns 处理加工的基础列，如设置列宽、处理 valueType 等
 * sortColumns: 基于 baseColumns 排序后的列（排序、显示/隐藏等配置）。
 * finalColumns: 基于 sortColumns 最终渲染的列，1、过滤隐藏列，2、添加序号、操作列
 *
 *                    ▕▔▔▔▔▔ 还原 ▔▔▔▔▏
 *                    ↓              ↑
 *   原始列          基础列          排序列          最终列
 * rawColumns -> baseColumns -> sortColumns -> finalColumns
 */
const SearchTable = (
  {
    className,
    style,
    request,
    requestOnMounted = true,
    header,
    search,
    titleTop,
    title = {},
    titleBottom,
    table = {},
    footer,
  }: ISearchTableProps,
  ref: Ref<ISearchTableRef>
) => {
  const rootElemRef = useRef<HTMLDivElement>(null)
  const searchValueRef = useRef<IObjectAny>(
    search === false ? {} : search.defaultValue || {}
  )

  /**
   * 全局状态
   */
  const globalStateRef = useRef<IGlobalState>({
    isTabChanging: false,
  })

  // 表格列配置数据处理
  const { baseColumns } = useBaseColumns({ table, globalStateRef })
  const { sortColumns, sortModalHolder, openSortModal } = useSortColumns({ baseColumns })
  const { finalColumns } = useFinalColumns({ table, sortColumns })

  // 表格高度计算：“一屏显示”效果
  const { scrollY, updateScrollY } = useScrollY({ table, rootElemRef })

  // 数据请求处理
  const {
    loading,
    dataSource,
    updateDataSource,
    summaryData,
    updateSummaryData,
    finalPagination,
    runRequest,
    requestParamsRef,
    requestExtraParamsRef,
    updateRequestExtraParams,
  } = useRequest({
    searchValueRef,
    table,
    request,
    updateScrollY,
  })

  // 搜索栏
  const { searchNodeHolder, searchRef } = useSearch({
    loading,
    search,
    searchValueRef,
    runRequest,
    updateScrollY,
  })

  // 标题栏
  const { titleNodeHolder } = useTitle({
    title,
    loading,
    globalStateRef,
    runRequest,
    openSortModal,
  })

  // 总结栏处理
  const { finalSummary } = useSummary({ table, finalColumns, summaryData })

  // 组件加载完毕请求一次数据
  useEffect(() => {
    if (requestOnMounted) {
      runRequest()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // 公共插槽参数
  const comRenderParams = { loading }

  // 表格 onChange 事件处理
  const handleTableChange: ITableProps['onChange'] = useMemoizedFn(
    (_p, filter, sorter, _e) => {
      // 服务端排序发送请求
      if (table.sortMode === 'service' || table.sortMode === 'service-all') {
        updateRequestExtraParams({ filter, sorter })
        runRequest()
      }
      table.onChange?.(_p, filter, sorter, _e)
    }
  )

  // 开放 API
  useOpenApi({
    ref,
    rootElemRef,
    searchRef,
    requestParamsRef,
    requestExtraParamsRef,
    searchValueRef,
    dataSource,
    updateDataSource,
    updateSummaryData,
    updateScrollY,
    openSortModal,
    runRequest,
  })

  return (
    <div ref={rootElemRef} className={className} style={style}>
      {header?.(comRenderParams)}

      {searchNodeHolder}

      {titleTop?.(comRenderParams)}

      {titleNodeHolder}

      {titleBottom?.(comRenderParams)}

      <Table
        tableLayout="fixed"
        {...table}
        className={classNames(table.className, EClassNames.table)}
        columns={finalColumns as never}
        dataSource={dataSource}
        loading={{
          spinning: loading,
          ...(isPlainObject(table?.loading) ? table.loading : undefined),
        }}
        scroll={{
          scrollToFirstRowOnChange: true,
          x: 'max-content',
          y: scrollY,
          ...table?.scroll,
        }}
        summary={finalSummary}
        pagination={finalPagination}
        onChange={handleTableChange}
      />

      {footer?.(comRenderParams)}

      {sortModalHolder}
    </div>
  )
}

export default forwardRef(SearchTable)
