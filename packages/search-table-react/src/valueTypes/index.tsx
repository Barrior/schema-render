import { utils } from '@schema-render/core-react'
import { Rate, Switch, Tag } from 'antd'

import ImagesPreview from '../components/ImagesPreview'
import { STYLE_CODE } from '../constants/style'
import type { ITableProps } from '../typings/table'
import { isEmpty } from '../utils/common'
import CommaNumber from './CommaNumber'
import LongText from './LongText'
import LongTextModal from './LongTextModal'

const { isArray } = utils

export const BUILT_IN_VALUE_TYPES: ITableProps['registerValueType'] = {
  /**
   * 代码块
   */
  code: ({ value, options }) => {
    return (
      <pre style={{ ...STYLE_CODE, ...options.style }}>
        <code>{value}</code>
      </pre>
    )
  },
  /**
   * 百分比
   */
  percent: ({ value }) => (isEmpty(value) ? '-' : `${value}%`),
  /**
   * 状态开关
   */
  switch: ({ value, options }) => <Switch {...options} checked={!!value} />,
  /**
   * 标签
   */
  tags: ({ value, options }) => {
    const data = isArray(value) ? value : [value]
    return data.map((text, i) => (
      <Tag {...options} key={i}>
        {text}
      </Tag>
    ))
  },
  /**
   * 评分
   */
  rate: ({ value, options }) => (
    <Rate style={{ width: 134 }} {...options} disabled value={value} />
  ),
  /**
   * 数字千分位
   */
  'comma-number': (props) => <CommaNumber {...props} />,
  /**
   * 图片显示
   */
  images: ({ value, options }) => {
    // 排除空数据
    if (isEmpty(value)) {
      return '-'
    }
    const imgList = isArray(value) ? value : [value]
    const { groupProps, ...imgProps } = options
    return <ImagesPreview imgList={imgList} imgProps={imgProps} groupProps={groupProps} />
  },
  /**
   * 长文案 Tooltips 方式显示
   */
  'long-text': (props) => <LongText {...props} />,
  /**
   * 长文案点击弹窗方式显示
   */
  'long-text-modal': (props) => <LongTextModal {...props} />,
}
