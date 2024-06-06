import type { IObjectAny } from '@schema-render/core-react'
import { utils } from '@schema-render/core-react'
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

const styles: any = {}

const SearchTable = (
  {
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

  // 表格列配置数据处理
  const { finalColumns } = useColumns({
    table,
  })

  // 数据请求处理
  const { loading, dataSource, innerPagination, runRequest, requestParamsRef } =
    useRequest({
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
  }))

  const comRenderParams = { loading }

  return (
    <div
      ref={rootElemRef}
      className={classNames(styles.searchTable, className, 'st-root')}
      style={style}
    >
      {header && (
        <div className={classNames(styles.header, 'st-header')}>
          {header(comRenderParams)}
        </div>
      )}

      <SchemaSearch
        {...search}
        ref={searchRef}
        rootClassName={classNames(search?.rootClassName, 'st-search')}
        disabled={search?.disabled || loading}
        value={searchValueRef.current}
        onChange={handleSearchChange}
        onReset={handleSearchReset}
        onSubmit={handleSearchSubmit}
      />

      {titleTop && (
        <div className={classNames(styles.titleTop, 'st-title-top')}>
          {titleTop(comRenderParams)}
        </div>
      )}

      <div className={classNames(styles.title, 'st-title')}>
        <div>{title?.tabsRightContent?.(comRenderParams)}</div>
      </div>

      {titleBottom && (
        <div className={classNames(styles.titleBottom, 'st-title-bottom')}>
          {titleBottom(comRenderParams)}
        </div>
      )}

      <Table
        tableLayout="fixed"
        {...table}
        className={classNames(styles.table, table?.className, 'st-table')}
        columns={finalColumns}
        dataSource={dataSource}
        loading={{
          spinning: loading,
          ...(isPlainObject(table?.loading) ? table.loading : undefined),
        }}
        pagination={innerPagination}
        scroll={{
          scrollToFirstRowOnChange: true,
          ...table?.scroll,
        }}
      />

      {footer && (
        <div className={classNames(styles.footer, 'st-footer')}>
          {footer(comRenderParams)}
        </div>
      )}
    </div>
  )
}

export default forwardRef(SearchTable)
