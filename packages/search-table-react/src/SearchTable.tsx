import type { IObjectAny } from '@schema-render/core-react'
import { useForceUpdate, utils } from '@schema-render/core-react'
import type { ISearchRef } from '@schema-render/search-react'
import SchemaSearch from '@schema-render/search-react'
import { Table } from 'antd'
import type { Ref } from 'react'
import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'

import { EClassNames } from './constants'
import useColumns from './hooks/useColumns'
import useRequest from './hooks/useRequest'
import useScrollY from './hooks/useScrollY'
import useSearch from './hooks/useSearch'
import type { ISearchTableProps, ISearchTableRef } from './typings/index.d'

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
  const searchRef = useRef<ISearchRef>(null)
  const searchValueRef = useRef<IObjectAny>(search.defaultValue ?? {})
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
    innerPagination,
    runRequest,
    requestParamsRef,
  } = useRequest({
    searchValueRef,
    table,
    request,
    updateScrollY,
  })

  // 搜索栏
  const {
    handleSearchChange,
    handleSearchReset,
    handleSearchSubmit,
    handleToggleCollapsed,
  } = useSearch({
    searchValueRef,
    search,
    runRequest,
    updateScrollY,
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
    updateScrollY,
  }))

  const comRenderParams = { loading }

  return (
    <div ref={rootElemRef} className={className} style={style}>
      {header?.(comRenderParams)}

      <SchemaSearch
        {...search}
        ref={searchRef}
        disabled={search?.disabled || loading}
        value={searchValueRef.current}
        onChange={handleSearchChange}
        onReset={handleSearchReset}
        onSubmit={handleSearchSubmit}
        onToggleCollapsed={handleToggleCollapsed}
      />

      {titleTop?.(comRenderParams)}

      {title.tabs && (
        <div className={title.className} style={{ marginTop: 16, ...title.style }}>
          <div>{title?.tabsRightContent?.(comRenderParams)}</div>
        </div>
      )}

      {titleBottom?.(comRenderParams)}

      <Table
        tableLayout="fixed"
        {...table}
        className={classNames(table.className, EClassNames.table)}
        style={{
          marginTop: 16,
          ...table.style,
        }}
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
          y: scrollY,
          ...table?.scroll,
        }}
      />

      {footer?.(comRenderParams)}
    </div>
  )
}

export default forwardRef(SearchTable)
