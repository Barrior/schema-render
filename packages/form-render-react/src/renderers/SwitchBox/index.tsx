import type { IOpenComponentParams } from '@schema-render/core-react'
import { utils } from '@schema-render/core-react'
import { Checkbox } from 'antd'
import React from 'react'

import styles from './index.module.css'

type IProps = React.FC<IOpenComponentParams<boolean>>

/**
 * 编辑、禁用与只读态组件
 */
const SwitchBox: IProps = ({ schema, disabled, readonly, value, onChange }) => {
  const { text, rightExtraContent, rootClassName, rootStyle, ...checkboxProps } =
    schema.renderOptions || {}

  const rightContent = utils.isFunction(rightExtraContent)
    ? rightExtraContent({ value, disabled, readonly })
    : rightExtraContent

  return (
    <div className={utils.classNames(rootClassName, styles.switchBox)} style={rootStyle}>
      <Checkbox
        {...checkboxProps}
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled || readonly}
      >
        {text}
      </Checkbox>
      {rightContent}
    </div>
  )
}

export default {
  component: SwitchBox,
}
