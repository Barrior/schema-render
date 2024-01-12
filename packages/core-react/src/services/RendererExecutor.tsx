import type { FC } from 'react'
import { createElement, useMemo, useState } from 'react'

import ErrorBoundary from '../components/ErrorBoundary'
import { EValidationStatus } from '../constants'
import useDebounceFn from '../hooks/useDebounceFn'
import useMemoizedFn from '../hooks/useMemoizedFn'
import useRootContext from '../hooks/useRootContext'
import type { ICommonProps } from '../typings/common'
import type {
  IOpenComponentParams,
  IOpenFunctionValidatorResult,
  IRenderer,
} from '../typings/core'
import assert from '../utils/assert'
import classNames from '../utils/classnames'
import { stringifyPath } from '../utils/misc'
import { get, pick } from '../utils/tinyLodash'
import { makeOpenValidatorParams, validateFormItem } from '../utils/validator'

interface IProps extends ICommonProps {
  /* 渲染器 */
  renderer: IRenderer
  /* 计算完成的 gridColumn 值 */
  gridColumn?: string
}

const RendererExecutor: FC<IProps> = ({ schema, path, renderer, gridColumn }) => {
  const rootCtx = useRootContext()
  const [validatorState, setValidatorState] = useState<IOpenFunctionValidatorResult>({
    status: EValidationStatus.success,
  })
  const stringPath = stringifyPath(path)

  // 注册校验器状态通知事件
  rootCtx.rendererStorage[stringPath] = useMemo(
    () => ({
      setValidatorState: (state) => {
        setValidatorState(state)
      },
    }),
    [setValidatorState]
  )

  // 延迟校验
  const { run: runValidation } = useDebounceFn(
    async (value) => {
      const validationState = await validateFormItem({
        schema,
        rootValue: rootCtx.rootValue,
        userCtx: rootCtx.userCtx,
        path,
        value,
        locale: rootCtx.locale,
        globalValidators: rootCtx.validators,
        rendererValidator: renderer.validator,
        rendererValidatorParams: openValidatorParams,
      })
      setValidatorState({ ...validationState })
    },
    { wait: 300 }
  )

  // 值回调事件
  const onChange: IOpenComponentParams['onChange'] = useMemoizedFn(
    async (value: any, options = {}) => {
      rootCtx.onChange({
        path,
        value,
        extra: options.extra,
      })

      // 校验
      if (options.triggerValidator !== false) {
        runValidation(value)
      }
    }
  )

  // 开放校验器参数
  const openValidatorParams = makeOpenValidatorParams({
    schema,
    path,
    value: get(rootCtx.rootValue, path),
    ...pick(rootCtx, 'disabled', 'readonly', 'rootValue', 'userCtx', 'locale'),
  })

  // 开放 component 参数
  const openComponentParams = {
    ...openValidatorParams,
    validator: validatorState,
    objectStyle: rootCtx.objectStyle,
    onChange,
  }

  // 主体内容渲染
  const renderContent = () => {
    if (!renderer.formItem && !renderer.component) {
      assert.fail(
        `One of the "formItem" and "component" properties of renderer "${schema.renderType}" must exist.`
      )
    }

    // 优先执行 formItem
    if (renderer.formItem) {
      // 开放 formItem 参数
      const openFormItemParams = openComponentParams
      return createElement(renderer.formItem, openFormItemParams)
    }

    // 开放表单项布局结构参数
    const openLayoutParams = {
      ...pick(
        openComponentParams,
        'schema',
        'required',
        'disabled',
        'readonly',
        'validator',
        'locale',
        'userCtx'
      ),
      body: createElement(renderer.component!, openComponentParams),
      prefixClassNames: rootCtx.prefixClassNames,
    }
    return createElement(rootCtx.itemLayout, openLayoutParams)
  }

  return (
    <div
      className={classNames(
        rootCtx.prefixClassNames('form-item', `item-${schema.renderType}`),
        schema.className,
        {
          'is-required': openComponentParams.required,
          'is-disabled': openComponentParams.disabled,
          'is-readonly': openComponentParams.readonly,
        }
      )}
      style={{
        gridColumn,
        ...schema.style,
      }}
    >
      <ErrorBoundary catchErrorTips={rootCtx.catchErrorTips}>
        {renderContent()}
      </ErrorBoundary>
    </div>
  )
}

export default RendererExecutor
