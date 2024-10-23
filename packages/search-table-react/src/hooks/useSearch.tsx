import type { IItemChangeEvent, IObjectAny } from '@schema-render/core-react'
import { useForceUpdate, useMemoizedFn, utils } from '@schema-render/core-react'
import type { ISearchProps, ISearchRef } from '@schema-render/search-react'
import SchemaSearch from '@schema-render/search-react'
import type { MutableRefObject } from 'react'
import { useRef } from 'react'

import type { ISearchTableProps, ISearchTableRef } from '../typings'

interface IUseSearchParams {
  loading: boolean
  search: ISearchTableProps['search']
  searchValueRef: MutableRefObject<IObjectAny>
  runRequest: ISearchTableRef['refresh']
  updateScrollY: ISearchTableRef['updateScrollY']
}

const { hasOwnProperty } = utils

/**
 * 搜索栏数据处理
 */
export default function useSearch({
  loading,
  search,
  searchValueRef,
  runRequest,
  updateScrollY,
}: IUseSearchParams) {
  const searchProps = (search === false ? {} : search) as ISearchProps
  const searchRef = useRef<ISearchRef>(null)
  const { forceUpdate } = useForceUpdate()

  // 是否受控模式，存在 value 字段即为受控模式
  const isControlled = hasOwnProperty(searchProps, 'value')

  if (isControlled) {
    searchValueRef.current = searchProps.value ?? {}
  }

  // 搜索数据变化事件
  const handleSearchChange = useMemoizedFn((value: IObjectAny, e: IItemChangeEvent) => {
    // 解构，避免外部 onChange 影响
    searchValueRef.current = { ...value }

    // 非受控模式下内部更新，受控模式下由应用层父组件触发更新
    if (!isControlled) {
      forceUpdate()
    }

    searchProps.onChange?.(value, e)
  })

  // 重置事件
  const handleSearchReset = useMemoizedFn(async (value: IObjectAny) => {
    searchValueRef.current = { ...value }

    // 外部事件
    await searchProps.onReset?.(value)

    // 发送请求，重置时，分页重置为第一页
    await runRequest({ current: 1 })
  })

  // 提交事件
  const handleSearchSubmit = useMemoizedFn(async (value: IObjectAny) => {
    await searchProps.onSubmit?.(value)
    await runRequest()
  })

  // 收起、展开事件
  const handleToggleCollapsed = useMemoizedFn((isCollapsed: boolean) => {
    searchProps.onToggleCollapsed?.(isCollapsed)
    // 更新表格高度
    updateScrollY(0, true)
  })

  const searchNodeHolder = search ? (
    <SchemaSearch
      {...search}
      rootStyle={{
        marginBottom: 16,
        ...search.rootStyle,
      }}
      ref={searchRef}
      disabled={search.disabled || loading}
      value={searchValueRef.current}
      onChange={handleSearchChange}
      onReset={handleSearchReset}
      onSubmit={handleSearchSubmit}
      onToggleCollapsed={handleToggleCollapsed}
    />
  ) : null

  return {
    searchNodeHolder,
    searchRef,
  }
}
