import { utils } from '@schema-render/core-react'
import { Rate, Switch, Tag } from 'antd'

import type { ITableProps } from '../typings/table'

const { isArray } = utils

const codeStyle = {
  backgroundColor: '#ececec',
  padding: 16,
  borderRadius: 6,
  textAlign: 'left',
}

export const BUILT_IN_VALUE_TYPES: ITableProps['registerValueType'] = {
  /**
   * 代码块
   */
  code: ({ value, options }) => {
    return (
      <pre style={{ ...codeStyle, ...options.style }}>
        <code>{value}</code>
      </pre>
    )
  },
  /**
   * 百分比
   */
  percent: ({ value }) => <>{value}%</>,
  /**
   * 状态开关
   */
  switch: ({ value, options }) => <Switch {...options} checked={!!value} />,
  /**
   * 标签
   */
  tags: ({ value, options }) => {
    const data = isArray(value) ? value : [value]
    return data.map((text) => <Tag {...options}>{text}</Tag>)
  },
  /**
   * 评分
   */
  rate: ({ value, options }) => (
    <Rate style={{ width: 134 }} {...options} disabled value={value} />
  ),
}
