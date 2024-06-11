import type { IObjectAny } from '@schema-render/core-react'
import { useMemoizedFn, utils } from '@schema-render/core-react'
import type { TablePaginationConfig } from 'antd'
import type { MutableRefObject } from 'react'
import { useRef, useState } from 'react'

import type {
  IRequestOptions,
  IRequestParams,
  IRequestResult,
  ISearchTableProps,
} from '../typings/index.d'

const { logger, pick } = utils

interface IUseRequest {
  request: ISearchTableProps['request']
  table: ISearchTableProps['table']
  searchValueRef: MutableRefObject<IObjectAny>
}

/**
 * 数据请求模块
 */
export default function useRequest({ request, table, searchValueRef }: IUseRequest) {
  // 分页参数
  const paginationRef = useRef({ current: 1, pageSize: 10, total: 0 })
  // 请求参数
  const requestParamsRef = useRef({})
  // 表格数据源
  const dataSourceRef = useRef<IObjectAny[]>([])
  // 是否加载表格数据中
  const [loading, setLoading] = useState(false)

  // 不需要分页时，置空数据
  if (table.pagination === false) {
    paginationRef.current = {} as never
  }

  // 拉取表格数据
  const runRequest = useMemoizedFn(
    async (params?: IRequestParams, options?: IRequestOptions) => {
      // 结果数据
      let result: Required<IRequestResult> = { data: [], total: 0 }

      // 防止重复请求
      if (loading) {
        return result
      }

      setLoading(true)

      try {
        if (request) {
          let requestParams: IRequestParams = {}

          if (options?.overwrite) {
            // 覆盖型
            requestParams = params || {}
          } else {
            // 合并型
            requestParams = {
              ...searchValueRef.current,
              ...pick(paginationRef.current, 'current', 'pageSize'),
              ...params,
            }
          }

          // 发送请求
          const res = await request(requestParams)

          // 储存请求参数，可用于“导出”功能获取同样的参数
          requestParamsRef.current = requestParams

          // 存储分页信息
          if (requestParams.current) {
            paginationRef.current.current = requestParams.current
          }
          if (requestParams.pageSize) {
            paginationRef.current.pageSize = requestParams.pageSize
          }
          paginationRef.current.total = res.total || 0

          // 存储数据源
          dataSourceRef.current = res.data || []

          // 成功返回数据
          result = {
            ...res,
            data: dataSourceRef.current,
            total: paginationRef.current.total,
          }
        }
      } catch (err) {
        logger.warn(err)
      }

      setLoading(false)

      // 返回数据
      return result
    }
  )

  let innerPagination: ISearchTableProps['table']['pagination'] = false as const

  if (table?.pagination !== false) {
    innerPagination = {
      style: { marginBottom: 0 },
      showQuickJumper: true,
      showSizeChanger: true,
      ...table?.pagination,
      ...paginationRef.current,
      onChange: (current: number, pageSize: number) => {
        // 触发外部事件
        ;(table?.pagination as TablePaginationConfig)?.onChange?.(current, pageSize)
        // 设置分页数据
        Object.assign(paginationRef.current, { current, pageSize })
        // 重新拉取数据
        runRequest()
      },
    }
  }

  return {
    loading,
    dataSource: dataSourceRef.current,
    innerPagination,
    requestParamsRef,
    runRequest,
  }
}
