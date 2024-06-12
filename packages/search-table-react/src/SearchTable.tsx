import type { IObjectAny } from '@schema-render/core-react'
import { useForceUpdate, utils } from '@schema-render/core-react'
import type { ISearchRef } from '@schema-render/search-react'
import SchemaSearch from '@schema-render/search-react'
import { Table } from 'antd'
import type { Ref } from 'react'
import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'

import useColumns from './hooks/useColumns'
import useRequest from './hooks/useRequest'
import useSearch from './hooks/useSearch'
import type { ISearchTableProps, ISearchTableRef } from './typings/index.d'

const { classNames, isPlainObject } = utils

const SearchTable = (
  {
    prefixCls = 'search-table',
    className,
    style,
    request,
    requestOnMounted = true,
    header,
    search,
    titleTop,
    title,
    titleBottom,
    table,
    footer,
  }: ISearchTableProps,
  ref: Ref<ISearchTableRef>
) => {
  const rootElemRef = useRef<HTMLDivElement>(null)
  const searchRef = useRef<ISearchRef>(null)
  const searchValueRef = useRef<IObjectAny>(search.defaultValue ?? {})
  const { forceUpdate } = useForceUpdate()

  // 表格列配置数据处理
  const { finalColumns } = useColumns({
    table,
  })

  // 数据请求处理
  const {
    loading,
    dataSource,
    setDataSource,
    innerPagination,
    runRequest,
    requestParamsRef,
  } = useRequest({
    searchValueRef,
    table,
    request,
  })

  // 搜索栏
  const { handleSearchChange, handleSearchReset, handleSearchSubmit } = useSearch({
    searchValueRef,
    search,
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
    getTableData: () => dataSource,
    setTableDataAndRender: (data) => {
      setDataSource(data)
      forceUpdate()
    },
  }))

  const comRenderParams = { loading }

  return (
    <div
      ref={rootElemRef}
      className={classNames(className, `${prefixCls}-root`)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: 10,
        ...style,
      }}
    >
      {header?.(comRenderParams)}

      <SchemaSearch
        {...search}
        ref={searchRef}
        disabled={search?.disabled || loading}
        value={searchValueRef.current}
        onChange={handleSearchChange}
        onReset={handleSearchReset}
        onSubmit={handleSearchSubmit}
      />

      {titleTop?.(comRenderParams)}

      <div className={`${prefixCls}-title`}>
        <div>{title?.tabsRightContent?.(comRenderParams)}</div>
      </div>

      {titleBottom?.(comRenderParams)}

      <Table
        tableLayout="fixed"
        {...table}
        columns={finalColumns}
        dataSource={dataSource}
        loading={{
          spinning: loading,
          ...(isPlainObject(table?.loading) ? table.loading : undefined),
        }}
        pagination={innerPagination}
        scroll={{
          scrollToFirstRowOnChange: true,
          x: 'max-content',
          ...table?.scroll,
        }}
      />

      {footer?.(comRenderParams)}
    </div>
  )
}

export default forwardRef(SearchTable)
