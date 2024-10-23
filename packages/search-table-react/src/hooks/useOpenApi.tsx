import type { IObjectAny } from '@schema-render/core-react'
import { useForceUpdate } from '@schema-render/core-react'
import type { ISearchRef } from '@schema-render/search-react'
import type { MutableRefObject, Ref, RefObject } from 'react'
import { useImperativeHandle } from 'react'

import type { ISearchTableRef } from '../typings'

interface IParams {
  ref: Ref<ISearchTableRef>
  rootElemRef: RefObject<HTMLDivElement>
  searchRef: RefObject<ISearchRef>
  requestParamsRef: MutableRefObject<IObjectAny>
  requestExtraParamsRef: MutableRefObject<IObjectAny>
  searchValueRef: MutableRefObject<IObjectAny>
  dataSource: IObjectAny[]
  updateDataSource: (data: IObjectAny[]) => void
  updateSummaryData: (data: IObjectAny) => void
  updateScrollY: ISearchTableRef['updateScrollY']
  openSettingModal: ISearchTableRef['openSettingModal']
  runRequest: ISearchTableRef['refresh']
}

export default function useOpenApi({
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
  openSettingModal,
  runRequest,
}: IParams) {
  const { forceUpdate } = useForceUpdate()

  // 开放 API
  useImperativeHandle(ref, () => ({
    refresh: runRequest,
    getRootElement: () => rootElemRef.current,
    getSearchRef: () => searchRef.current,
    getRequestParams: () => requestParamsRef.current,
    getRequestExtraParams: () => requestExtraParamsRef.current,
    getSearchValue: () => searchValueRef.current,
    setSearchValue: (value, options) => {
      const nextValue = options?.overwrite
        ? value
        : { ...searchValueRef.current, ...value }
      searchRef.current?.setValue(nextValue)
    },
    clearSearchValue: () => searchRef.current?.resetValue(),
    getDataSource: () => dataSource,
    setDataSource: (data) => {
      updateDataSource(data)
      forceUpdate()
    },
    setSummaryData: (data) => {
      updateSummaryData(data)
      forceUpdate()
    },
    updateScrollY,
    openSettingModal,
    rerender: forceUpdate,
  }))
}
