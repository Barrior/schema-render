import { DownOutlined } from '@ant-design/icons'
import type { IObjectAny } from '@schema-render/core-react'
import { utils } from '@schema-render/core-react'
import { Button, Dropdown, Popconfirm } from 'antd'
import type { ReactNode } from 'react'
import { Fragment } from 'react'

import ButtonLoading from '../../../components/ButtonLoading'
import type { ILocale, ISearchTableProps } from '../../../typings'
import type { IActionItem } from '../../../typings/table.d'
import styles from './actions.module.css'

const { isArray, isString, omit } = utils

/**
 * 创建「操作栏」按钮
 */
export function createActionItem(item: IActionItem, index: number) {
  const { text, confirmAgain, confirmProps, onClick, ...restItem } = item

  const content = isString(text) ? (
    <ButtonLoading
      key={index}
      type="link"
      size="small"
      {...omit(restItem, 'isShow')}
      onClick={(e) => !confirmAgain && onClick?.(e)}
    >
      {text}
    </ButtonLoading>
  ) : (
    text
  )

  // 增加二次确认
  if (confirmAgain) {
    return (
      <Popconfirm
        key={index}
        title="温馨提示"
        description="请二次确认您的操作！"
        {...confirmProps}
        onConfirm={onClick as never}
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
  locale,
}: {
  record: IObjectAny
  index: number
  actionItems: ISearchTableProps['table']['actionItems']
  actionItemsCount: number
  actionItemsDropdownProps: ISearchTableProps['table']['actionItemsDropdownProps']
  locale: ILocale
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
    const dropdownItems: ReactNode[] = []

    displayableItems.forEach((item, i) => {
      /**
       * 显示个数减一，以保证“更多”按钮对齐
       */
      if (i < actionItemsCount - 1) {
        displayedItems.push(item)
      } else {
        dropdownItems.push(createActionItem(item, i))
      }
    })

    return (
      <>
        {displayedItems.map((item, i) => createActionItem(item, i))}
        <Dropdown
          placement="bottomRight"
          {...actionItemsDropdownProps}
          dropdownRender={() => (
            <div className={styles.dropdownCls}>
              {dropdownItems.map((label, i) => (
                <Fragment key={i}>{label}</Fragment>
              ))}
            </div>
          )}
        >
          <Button
            type="link"
            size="small"
            style={{ gap: 2, display: 'inline-flex', alignItems: 'center' }}
          >
            {locale.SearchTable.more} <DownOutlined style={{ margin: 0 }} />
          </Button>
        </Dropdown>
      </>
    )
  } else {
    contents = displayableItems.map((item, i) => createActionItem(item, i))
  }

  return contents
}
