import type { IObjectAny, IPartRequired } from '@schema-render/core-react'
import { useMemoizedFn, utils } from '@schema-render/core-react'
import type { TablePaginationConfig } from 'antd'
import type { MutableRefObject } from 'react'
import { useRef, useState } from 'react'

import { EClassNames } from '../constants'
import type {
  ILocale,
  IRequestExtraParams,
  IRequestOptions,
  IRequestParams,
  IRequestResult,
  ISearchTableProps,
  ISearchTableRef,
} from '../typings/index.d'

const { logger, pick, classNames, templateCompiled } = utils

interface IUseRequest {
  request: ISearchTableProps['request']
  updateScrollY: ISearchTableRef['updateScrollY']
  table: ISearchTableProps['table']
  searchValueRef: MutableRefObject<IObjectAny>
  locale: ILocale
}

/**
 * 数据请求模块
 */
export default function useRequest({
  request,
  updateScrollY,
  table,
  searchValueRef,
  locale,
}: IUseRequest) {
  // 分页参数
  const paginationRef = useRef({
    current: 1,
    pageSize: (table.pagination !== false ? table.pagination?.defaultPageSize : 10) || 10,
    total: 0,
  })
  // 请求参数
  const requestParamsRef = useRef<IObjectAny>({})
  // 请求额外的参数，如 Antd 排序、过滤数据
  const requestExtraParamsRef = useRef<IRequestExtraParams>({})
  // 表格数据源
  const dataSourceRef = useRef<IObjectAny[]>([])
  // 合计栏数据
  const summaryDataRef = useRef<IObjectAny>({})
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
      let result: IPartRequired<IRequestResult, 'data' | 'total'> = {
        data: [],
        total: 0,
      }

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
          const res = await request(requestParams, requestExtraParamsRef.current)

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

          // 存储合计栏数据
          summaryDataRef.current = res.summaryData || {}

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

      // 请求完毕后，更新表格高度，即 scrollY 值
      if (table.autoScrollY) {
        updateScrollY()
      }

      // 返回数据
      return result
    }
  )

  let finalPagination: ISearchTableProps['table']['pagination'] = false as const

  if (table.pagination !== false) {
    finalPagination = {
      style: { marginBottom: 0 },
      showQuickJumper: true,
      showSizeChanger: true,
      showTotal: (total: number) => {
        const { current, pageSize } = paginationRef.current
        const start = (current - 1) * pageSize
        const end = start + dataSourceRef.current.length
        return templateCompiled(locale.SearchTable.paginationTotal, {
          // 当分页是第一页时，start 为 0，此时取值到 1
          start: start || 1,
          end,
          total,
        })
      },
      ...table.pagination,
      ...paginationRef.current,
      onChange: (current: number, pageSize: number) => {
        // 触发外部事件
        ;(table.pagination as TablePaginationConfig)?.onChange?.(current, pageSize)
        // 设置分页数据
        Object.assign(paginationRef.current, { current, pageSize })
        // 重新拉取数据
        runRequest()
      },

      // 添加特有类名，用于 scrollY 计算
      className: classNames(table.pagination?.className, EClassNames.pagination),
    }
  }

  const updateDataSource = useMemoizedFn((data: IObjectAny[]) => {
    dataSourceRef.current = data
  })

  const updateSummaryData = useMemoizedFn((data: IObjectAny) => {
    summaryDataRef.current = data
  })

  const updateRequestExtraParams = useMemoizedFn((data: IRequestExtraParams) => {
    requestExtraParamsRef.current = data
  })

  return {
    loading,
    dataSource: dataSourceRef.current,
    updateDataSource,
    summaryData: summaryDataRef.current,
    updateSummaryData,
    requestParamsRef,
    requestExtraParamsRef,
    updateRequestExtraParams,
    finalPagination,
    runRequest,
  }
}
