import { QuestionCircleOutlined } from '@ant-design/icons'
import type { IOpenItemLayoutParams } from '@schema-render/core-react'
import { utils } from '@schema-render/core-react'
import { Popover } from 'antd'
import type { FC } from 'react'

import useFormRenderContext from '../../hooks/useFormRenderContext'
import type { IFormRenderProps } from '../../typings'
import styles from './index.module.css'

const { classNames } = utils

const builtinLabelRender: IFormRenderProps['labelRender'] = ({
  schema,
  required,
  prefixClassNames,
  labelColon,
}) => {
  const hasColon = !!labelColon

  return (
    <>
      {/* 必填标记 */}
      {required && (
        <span className={classNames(prefixClassNames('item-mark'), styles.mark)}>*</span>
      )}

      {/* 标题展示 */}
      <span className={classNames(prefixClassNames('item-title'), styles.title)}>
        {schema.title}
      </span>

      {/* 标题描述信息 */}
      {!!schema.titleDescription && (
        <Popover placement="top" trigger="hover" content={schema.titleDescription}>
          <QuestionCircleOutlined
            className={classNames(
              prefixClassNames('item-title-tooltip'),
              styles.titleTooltip
            )}
            style={{ marginRight: hasColon ? 4 : undefined }}
          />
        </Popover>
      )}

      {/* 冒号 */}
      {hasColon && (
        <span className={classNames(prefixClassNames('item-colon'))}>{labelColon}</span>
      )}
    </>
  )
}

const Vertical: FC<IOpenItemLayoutParams> = ({
  body,
  schema,
  validator,
  required,
  disabled,
  readonly,
  userCtx,
  prefixClassNames,
}) => {
  const { labelWidth, labelColon, labelGap, labelRender, locale } = useFormRenderContext()
  const innerLabelRender = labelRender ? labelRender : builtinLabelRender
  const labelRenderParams = {
    schema,
    required,
    disabled,
    readonly,
    userCtx,
    prefixClassNames,
    labelWidth,
    labelColon,
    labelGap,
    locale,
  }

  return (
    <div className={prefixClassNames('item-layout-vertical')}>
      {/* 头部内容 */}
      <div className={classNames(prefixClassNames('item-header'), styles.header)}>
        {innerLabelRender(labelRenderParams)}
      </div>

      {/* 主体内容 */}
      <div className={prefixClassNames('item-body')}>{body}</div>

      {/* 页脚内容 */}
      <div className={classNames(prefixClassNames('item-footer'), styles.footer)}>
        {/* 错误消息展示 */}
        {validator.status === 'error' && !!validator.message && (
          <div
            className={classNames(prefixClassNames('item-error-msg'), styles.errorMsg)}
          >
            {validator.message}
          </div>
        )}

        {/* 警告消息展示 */}
        {validator.status === 'warning' && !!validator.message && (
          <div
            className={classNames(
              prefixClassNames('item-warning-msg'),
              styles.warningMsg
            )}
          >
            {validator.message}
          </div>
        )}

        {/* 描述信息展示 */}
        {!!schema.description && (
          <div
            className={classNames(
              prefixClassNames('item-description'),
              styles.description
            )}
          >
            {schema.description}
          </div>
        )}
      </div>
    </div>
  )
}

export default Vertical
