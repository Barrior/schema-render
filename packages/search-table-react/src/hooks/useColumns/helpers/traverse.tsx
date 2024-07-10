import type { IObjectAny } from '@schema-render/core-react'
import { utils } from '@schema-render/core-react'

import type { ISearchTableProps } from '../../../typings'
import type { IColumnType } from '../../../typings/table.d'
import { isEmpty } from '../../../utils/common'
import { localSorter } from './sort'

const { get, isArray, isString, isFunction } = utils

/**
 * 处理原始 columns 数据
 * 1、减少 key 字段声明，用 dataIndex 作为唯一字段
 * 2、统一处理无数据列以中横线 “-” 显示
 * 3、统一居中展示
 * 4、以上内容，子节点一并同样处理
 *
 * @param rawColumns 原始 columns
 * @param table table 属性
 * @param finalValueTypeProcessors valueType 处理器
 */
export function processRawColumns(
  rawColumns: IColumnType<string>[],
  table: ISearchTableProps['table'],
  finalValueTypeProcessors: Required<ISearchTableProps['table']>['registerValueType']
): IColumnType<string>[] {
  return rawColumns.map(({ title, dataIndex, children, valueType, ...restItem }) => {
    // 遍历子节点
    if (isArray(children)) {
      children = processRawColumns(children, table, finalValueTypeProcessors)
    }

    const strDataIndex = isArray(dataIndex) ? dataIndex.join('.') : (dataIndex as string)
    const arrDataIndex = isArray(dataIndex) ? dataIndex : [dataIndex]

    const isSortAll = table.sortMode === 'local-all' || table.sortMode === 'service-all'
    const hasSorter = !!restItem.sorter || !!restItem.sortType || isSortAll

    // 排序字段
    let sorter: IColumnType['sorter'] = false

    // 父级节点不增加排序操作
    if (!children) {
      if (restItem.sorter) {
        // 优先使用自定义排序
        sorter = restItem.sorter
      } else if (isSortAll || restItem.sortType) {
        // 本地排序或服务端排序
        sorter =
          table.sortMode === 'service-all'
            ? true
            : (a: IObjectAny, b: IObjectAny, sortOrder: IColumnType['sortOrder']) => {
                return localSorter(a, b, {
                  arrDataIndex,
                  sortOrder,
                  sortType: restItem.sortType,
                  sortDataExtractor: restItem.sortDataExtractor,
                  sortStringValueTransform: table.sortStringValueTransform,
                })
              }
      }
    }

    // 内部渲染函数
    const render = (_val: string, record: IObjectAny, index: number) => {
      const value = get(record, arrDataIndex)

      let innerValueType = ''
      let innerValueTypeOptions: IObjectAny | undefined = undefined

      if (valueType) {
        if (isFunction(valueType)) {
          const { type, ...options } = valueType(record)
          innerValueType = type
          innerValueTypeOptions = options
        } else {
          innerValueType = valueType
        }
      }

      const valueTypeProcessor = finalValueTypeProcessors[innerValueType]
      if (valueTypeProcessor) {
        return valueTypeProcessor({
          value,
          record,
          options: innerValueTypeOptions || {},
          index,
        })
      }

      return isEmpty(value) ? '-' : value
    }

    return {
      align: 'center',
      key: strDataIndex,
      width: isString(title) ? title.length * 16 + (hasSorter ? 50 : 30) : undefined,
      render,
      // 配置覆盖
      ...restItem,
      title,
      dataIndex,
      children,
      sorter,
    }
  })
}
