import { DoubleRightOutlined } from '@ant-design/icons'
import type { IObjectAny } from '@schema-render/core-react'
import { utils } from '@schema-render/core-react'
import { Dropdown, Popconfirm, Space } from 'antd'
import type { ReactNode } from 'react'

import ButtonLoading from '../../components/ButtonLoading'
import type { ISearchTableProps } from '../../typings'
import type { IActionItem, IColumnType } from '../../typings/table.d'
import { isEmpty } from '../../utils/common'

const { get, isArray, isString } = utils

/**
 * 创建「操作栏」按钮
 */
export function createActionItem(item: IActionItem, index: number) {
  const handleClick = item.onClick

  const content = (
    <ButtonLoading
      key={index}
      type="link"
      {...item}
      onClick={(e) => !item.confirmAgain && handleClick?.(e)}
    >
      {item.text}
    </ButtonLoading>
  )

  // 增加二次确认
  if (item.confirmAgain) {
    return (
      <Popconfirm
        key={index}
        title="温馨提示"
        description="请二次确认您的操作！"
        {...item.confirmProps}
        onConfirm={handleClick as never}
      >
        {content}
      </Popconfirm>
    )
  }

  return content
}

/**
 * 创建 “操作栏” 按钮组
 */
export function createActions({
  record,
  index,
  actionItems,
  actionItemsCount,
}: {
  record: IObjectAny
  index: number
  actionItems: ISearchTableProps['table']['actionItems']
  actionItemsCount: number
}) {
  const items = actionItems?.(record, index)

  if (!isArray(items)) {
    return null
  }

  // 可展示项
  const displayableItems = items.filter((item) => {
    return item.isShow !== false
  })

  // 最后渲染的内容
  let contents: ReactNode

  if (displayableItems.length > actionItemsCount) {
    const displayedItems: IActionItem[] = []
    const dropdownItems: any[] = []

    displayableItems.forEach((item, i) => {
      if (i < actionItemsCount) {
        displayedItems.push(item)
      } else {
        dropdownItems.push({
          ...item,
          key: i,
          label: createActionItem(item, i),
        })
      }
    })

    return (
      <>
        {displayedItems.map((item, i) => createActionItem(item, i))}
        <Dropdown menu={{ items: dropdownItems }} placement="bottomRight">
          <Space>
            更多 <DoubleRightOutlined />
          </Space>
        </Dropdown>
      </>
    )
  } else {
    contents = displayableItems.map((item, i) => createActionItem(item, i))
  }

  return contents
}

/**
 * 处理原始 columns 数据
 * 1、减少 key 字段声明，用 dataIndex 作为唯一字段
 * 2、统一处理无数据列以中横线 “-” 显示
 * 3、统一居中展示
 * 4、以上内容，子节点一并同样处理
 *
 * @param rawColumns 原始 columns
 */
export function processRawColumns(rawColumns: IColumnType[]): IColumnType[] {
  return rawColumns.map(({ dataIndex, children, title, ...restItem }) => {
    // 遍历子节点
    if (isArray(children)) {
      children = processRawColumns(children)
    }

    const strDataIndex = isArray(dataIndex) ? dataIndex.join('.') : (dataIndex as string)
    const arrDataIndex = isArray(dataIndex) ? dataIndex : [dataIndex]

    return {
      align: 'center',
      key: strDataIndex,
      width: isString(title) ? title.length * 16 + 30 : undefined,
      render: (_value: string, record: IObjectAny) => {
        const text = get(record, arrDataIndex)
        return isEmpty(text) ? '-' : text
      },
      title,
      dataIndex,
      children,
      // 配置覆盖
      ...restItem,
    }
  })
}
