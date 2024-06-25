import type { IObjectAny } from '@schema-render/core-react'
import { useForceUpdate, useMemoizedFn, utils } from '@schema-render/core-react'
import { Table } from 'antd'
import type { Ref } from 'react'
import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'

import { EClassNames } from './constants'
import useColumns from './hooks/useColumns'
import useRequest from './hooks/useRequest'
import useScrollY from './hooks/useScrollY'
import useSearch from './hooks/useSearch'
import useSummary from './hooks/useSummary'
import useTitle from './hooks/useTitle'
import type { ISearchTableProps, ISearchTableRef } from './typings/index.d'
import type { ITableProps } from './typings/table'

const { classNames, isPlainObject } = utils

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
  const { forceUpdate } = useForceUpdate()

  // 表格列配置数据处理
  const { finalColumns } = useColumns({
    table,
  })

  // 表格高度计算：“一屏显示”效果
  const { scrollY, updateScrollY } = useScrollY({ table, rootElemRef })

  // 数据请求处理
  const {
    loading,
    dataSource,
    setDataSource,
    summaryData,
    setSummaryData,
    finalPagination,
    runRequest,
    requestParamsRef,
    setRequestExtraParams,
  } = useRequest({
    searchValueRef,
    table,
    request,
    updateScrollY,
  })

  // 总结栏处理
  const { finalSummary } = useSummary({ table, finalColumns, summaryData })

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
    runRequest,
  })

  // 组件加载完毕请求一次数据
  useEffect(() => {
    if (requestOnMounted) {
      runRequest()
    }
  }, [])

  // 开放 API
  useImperativeHandle(ref, () => ({
    refresh: runRequest,
    getSearchRef: () => searchRef.current,
    getRootElement: () => rootElemRef.current,
    getRequestParams: () => requestParamsRef.current,
    getSearchValue: () => searchValueRef.current,
    setSearchValue: (value, options) => {
      const nextValue = options?.overwrite
        ? value
        : { ...searchValueRef.current, ...value }
      searchRef.current?.setValue(nextValue)
    },
    clearSearchValue: () => searchRef.current?.resetValue(),
    getDataSource: () => dataSource,
    setDataSourceAndRender: (data) => {
      setDataSource(data)
      forceUpdate()
    },
    setSummaryDataAndRender: (data) => {
      setSummaryData(data)
      forceUpdate()
    },
    updateScrollY,
  }))

  const comRenderParams = { loading }

  // 表格 onChange 事件处理
  const handleTableChange: ITableProps['onChange'] = useMemoizedFn(
    (_p, filter, sorter, _e) => {
      // 服务端排序发送请求
      if (table.sortMode === 'service' || table.sortMode === 'service-all') {
        setRequestExtraParams({ filter, sorter })
        runRequest()
      }
      table.onChange?.(_p, filter, sorter, _e)
    }
  )

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
        columns={finalColumns}
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
    </div>
  )
}

export default forwardRef(SearchTable)
