import { DownOutlined } from '@ant-design/icons'
import type { IObjectAny } from '@schema-render/core-react'
import { utils } from '@schema-render/core-react'
import type { MenuProps } from 'antd'
import { Button, Dropdown, Popconfirm } from 'antd'
import type { ReactNode } from 'react'

import ButtonLoading from '../../../components/ButtonLoading'
import { STYLE_ICON_MORE } from '../../../constants/style'
import type { ISearchTableProps } from '../../../typings'
import type { IActionItem } from '../../../typings/table.d'

const { isArray } = utils

/**
 * 创建「操作栏」按钮
 */
export function createActionItem(item: IActionItem, index: number) {
  const handleClick = item.onClick

  const content = (
    <ButtonLoading
      key={index}
      type="link"
      size="small"
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
  actionItemsDropdownProps,
}: {
  record: IObjectAny
  index: number
  actionItems: ISearchTableProps['table']['actionItems']
  actionItemsCount: number
  actionItemsDropdownProps: ISearchTableProps['table']['actionItemsDropdownProps']
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
    const dropdownItems: MenuProps['items'] = []

    displayableItems.forEach((item, i) => {
      /**
       * 显示个数减一，以保证“更多”按钮对齐
       */
      if (i < actionItemsCount - 1) {
        displayedItems.push(item)
      } else {
        dropdownItems.push({
          key: i,
          label: createActionItem(item, i),
        })
      }
    })

    return (
      <>
        {displayedItems.map((item, i) => createActionItem(item, i))}
        <Dropdown
          placement="bottomRight"
          {...actionItemsDropdownProps}
          menu={{ items: dropdownItems }}
        >
          <Button type="link" size="small">
            更多 <DownOutlined style={STYLE_ICON_MORE} />
          </Button>
        </Dropdown>
      </>
    )
  } else {
    contents = displayableItems.map((item, i) => createActionItem(item, i))
  }

  return contents
}
