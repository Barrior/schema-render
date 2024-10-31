import { utils } from '@schema-render/core-react'
import type { SpaceProps } from 'antd'
import { Button, Space } from 'antd'
import type { FC } from 'react'
import { Fragment } from 'react'

import { ACTIONS } from '../constants'
import useFormRenderContext from '../hooks/useFormRenderContext'
import type { IRegisterActions, IRegisterActionsFnParams } from '../typings'

/**
 * 内置操作：提交、重置
 */
const BUILTIN_ACTIONS: IRegisterActions = {
  [ACTIONS.submit]: ({ loading, locale, disabled, submitText }) => (
    <Button
      type="primary"
      htmlType="submit"
      // 自身在 loading 时不使用禁用态
      disabled={loading.submit ? false : disabled || loading.reset}
      loading={loading.submit}
    >
      {submitText || locale?.FormRender?.submit}
    </Button>
  ),
  [ACTIONS.reset]: ({ handleReset, loading, locale, disabled, resetText }) => (
    <Button
      htmlType="button"
      // 自身在 loading 时不使用禁用态
      disabled={loading.reset ? false : disabled || loading.submit}
      loading={loading.reset}
      onClick={handleReset}
    >
      {resetText || locale?.FormRender?.reset}
    </Button>
  ),
}

interface IActionsProps extends SpaceProps {
  /** 全局禁用状态 */
  disabled?: boolean
}

/**
 * 搜索操作
 */
const Actions: FC<IActionsProps> = ({ disabled, ...spaceProps }) => {
  const {
    actions,
    actionsLoading,
    registerActions,
    handleReset,
    handleSubmit,
    layoutColumnGap,
    locale,
    submitText,
    resetText,
  } = useFormRenderContext()

  const isShowActions = utils.isArray(actions) && actions.length > 0

  if (!isShowActions) {
    return null
  }

  const actionMap: IRegisterActions = {
    ...BUILTIN_ACTIONS,
    ...registerActions,
  }

  return (
    <Space size={layoutColumnGap} {...spaceProps}>
      {actions.map((action) => {
        const params: IRegisterActionsFnParams = {
          locale,
          disabled,
          loading: actionsLoading,
          submitText,
          resetText,
        }

        if (action === ACTIONS.submit) {
          params.handleSubmit = handleSubmit
        } else if (action === ACTIONS.reset) {
          params.handleReset = handleReset
        }

        const fn = actionMap[action]

        if (!fn) {
          return null
        }

        return <Fragment key={action}>{fn?.(params)}</Fragment>
      })}
    </Space>
  )
}

export default Actions
