import type { FC } from 'react'
import { createElement, useMemo, useRef, useState } from 'react'

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
  const rootElementRef = useRef<HTMLDivElement>(null)

  // 注册渲染器开发方法
  rootCtx.rendererStorage[stringPath] = useMemo(
    () => ({
      // 注册校验器状态通知事件
      setValidatorState: (state) => setValidatorState(state),
      // 获取根节点
      getRootElement: () => rootElementRef.current,
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
      } else {
        // 重置校验状态
        setValidatorState({
          status: EValidationStatus.success,
        })
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

  // 开放 formItem 参数
  const openFormItemParams = openComponentParams

  // 主体内容渲染
  const renderContent = () => {
    // 开放表单项布局结构通用参数
    const commonOpenLayoutParams = {
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
      prefixClassNames: rootCtx.prefixClassNames,
    }

    // 是否只读态
    if (openComponentParams.readonly) {
      // 优先 readonlyFormItem
      if (renderer.readonlyFormItem) {
        return createElement(renderer.readonlyFormItem, openFormItemParams)
      }
      // 其次 readonlyComponent
      if (renderer.readonlyComponent) {
        return createElement(rootCtx.itemLayout, {
          ...commonOpenLayoutParams,
          body: createElement(renderer.readonlyComponent, openComponentParams),
        })
      }
    }

    // 是否禁用态
    if (openComponentParams.disabled) {
      // 优先 disabledFormItem
      if (renderer.disabledFormItem) {
        return createElement(renderer.disabledFormItem, openFormItemParams)
      }
      // 其次 disabledComponent
      if (renderer.disabledComponent) {
        return createElement(rootCtx.itemLayout, {
          ...commonOpenLayoutParams,
          body: createElement(renderer.disabledComponent, openComponentParams),
        })
      }
    }

    /**
     * 常规态、无「只读态/禁用态」组件时，执行下面逻辑
     */
    // 优先 formItem
    if (renderer.formItem) {
      return createElement(renderer.formItem, openFormItemParams)
    }

    // 其次 component
    if (renderer.component) {
      return createElement(rootCtx.itemLayout, {
        ...commonOpenLayoutParams,
        body: createElement(renderer.component, openComponentParams),
      })
    }
  }

  return (
    <div
      ref={rootElementRef}
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
