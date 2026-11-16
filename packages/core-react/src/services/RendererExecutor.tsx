import type { FC } from 'react'
import { createElement, memo, useLayoutEffect, useMemo, useRef, useState } from 'react'

import ErrorBoundary from '../components/ErrorBoundary'
import { EValidationStatus } from '../constants'
import FieldPathContext from '../FieldPathContext'
import useDebounceFn from '../hooks/useDebounceFn'
import useMemoizedFn from '../hooks/useMemoizedFn'
import useRootActions from '../hooks/useRootActions'
import useRootContext from '../hooks/useRootContext'
import useValueSubscription from '../hooks/useValueSubscription'
import type { ICommonProps } from '../typings/common'
import type {
  IOpenComponentParams,
  IOpenFunctionValidatorResult,
  IRenderer,
} from '../typings/core'
import type { IRendererInstance } from '../typings/rootContext'
import classNames from '../utils/classnames'
import { getStatementDeps } from '../utils/deps'
import { logRender, withRenderLog } from '../utils/devLog'
import { areRendererPropsEqual } from '../utils/memo'
import { stringifyPath } from '../utils/misc'
import { get, pick } from '../utils/tinyLodash'
import { makeOpenValidatorParams, validateFormItem } from '../utils/validator'

interface IProps extends ICommonProps {
  /* 渲染器 */
  renderer: IRenderer
  /* 计算完成的 gridColumn 值 */
  gridColumn?: string
}

function isSameValidatorState(
  prev: IOpenFunctionValidatorResult,
  next: IOpenFunctionValidatorResult
): boolean {
  return (
    prev.status === next.status &&
    prev.message === next.message &&
    prev.extra === next.extra
  )
}

function stringifyValue(value: unknown): string {
  try {
    const text = typeof value === 'string' ? value : JSON.stringify(value)
    return String(text).slice(0, 20)
  } catch (e) {
    return String(value)
  }
}

const RendererExecutor: FC<IProps> = ({ schema, path, renderer, gridColumn }) => {
  const rootCtx = useRootContext()
  const rootActions = useRootActions()
  const { onChange: onRootChange, rendererStorage, getRootValue } = rootActions
  const { disabled, readonly, userCtx, locale } = rootCtx
  const [validatorState, setValidatorState] = useState<IOpenFunctionValidatorResult>({
    status: EValidationStatus.success,
  })

  // 校验结果与当前状态一致时**不调用 setState**：
  // 只依赖 React 对「相同 state」的 bail-out 在浏览器里仍可能渲染一次（实测 300ms 后多一帧）
  const validatorStateRef = useRef<IOpenFunctionValidatorResult>(validatorState)

  const applyValidatorState = useMemoizedFn((next: IOpenFunctionValidatorResult) => {
    if (isSameValidatorState(validatorStateRef.current, next)) {
      return
    }

    validatorStateRef.current = next
    setValidatorState(next)
  })
  const stringPath = stringifyPath(path)
  const rootElementRef = useRef<HTMLDivElement>(null)
  // 订阅通知计数（仅用于开发日志区分触发源）
  const subscriptionNotifyRef = useRef(0)
  // 非订阅读取：只在本组件渲染时取最新值
  const rootValue = getRootValue()
  const value = get(rootValue, path)

  // 渲染原因（仅开发日志用）：对比上一次已提交的快照
  const renderSnapshotRef = useRef<{
    value: any
    status: string
    message?: string
    extra?: unknown
    schema: unknown
    path: unknown
    renderer: unknown
    gridColumn?: string
    staticCtx: unknown
    actionsCtx: unknown
    notify: number
  } | null>(null)
  const previousSnapshot = renderSnapshotRef.current

  let renderReason = '首次渲染'

  if (previousSnapshot) {
    if (!Object.is(previousSnapshot.value, value)) {
      renderReason = `字段值变化 → ${stringifyValue(value)}`
    } else if (
      previousSnapshot.status !== validatorState.status ||
      previousSnapshot.message !== validatorState.message ||
      previousSnapshot.extra !== validatorState.extra
    ) {
      renderReason = '校验状态变化'
    } else if (
      previousSnapshot.schema !== schema ||
      previousSnapshot.path !== path ||
      previousSnapshot.renderer !== renderer ||
      previousSnapshot.gridColumn !== gridColumn
    ) {
      renderReason = 'props 变化'
    } else if (previousSnapshot.staticCtx !== rootCtx) {
      renderReason = '静态 Context 变化'
    } else if (previousSnapshot.actionsCtx !== rootActions) {
      renderReason = '动作 Context 变化'
    } else if (previousSnapshot.notify !== subscriptionNotifyRef.current) {
      renderReason = '订阅通知（值未变化）'
    } else if ((renderer as { pure?: boolean }).pure !== true) {
      renderReason = '父级重渲染（非 pure）'
    } else {
      renderReason = '父级重渲染'
    }
  }

  logRender('RendererExecutor', path, renderReason)

  useLayoutEffect(() => {
    validatorStateRef.current = validatorState

    renderSnapshotRef.current = {
      value,
      status: validatorState.status,
      message: validatorState.message,
      extra: validatorState.extra,
      schema,
      path,
      renderer,
      gridColumn,
      staticCtx: rootCtx,
      actionsCtx: rootActions,
      notify: subscriptionNotifyRef.current,
    }
  })

  // 表达式依赖的字段路径：只有这些路径变化时才重新求值
  const valueDeps = useMemo(
    () => getStatementDeps([schema.required, schema.disabled, schema.readonly], path),
    [schema, path]
  )

  // 订阅路径：pure 渲染器 = 自身值 + 表达式依赖；未声明 pure 的渲染器无法知道它读了什么，
  // 一律订阅全量（null）。订阅是唯一的触发源，避免「props 更新 + 订阅通知」重复渲染。
  const subscriptionPaths = useMemo(() => {
    if (!renderer.pure || !valueDeps) {
      return null
    }

    return [path, ...valueDeps]
  }, [renderer, path, valueDeps])

  useValueSubscription(subscriptionPaths, { notifyRef: subscriptionNotifyRef })

  // 渲染器实例 API：引用稳定，命令式 API 拿到的始终是同一个对象
  const instanceApi = useMemo<IRendererInstance>(
    () => ({
      // 注册校验器状态通知事件
      setValidatorState: (state) => applyValidatorState(state),
      // 获取根节点
      getRootElement: () => rootElementRef.current,
    }),
    [applyValidatorState]
  )

  // 提交后注册，卸载时清理：
  // 1. 不在 render 阶段写共享注册表，避免 StrictMode / 中断渲染产生脏写；
  // 2. 清理前确认登记的仍是自己，避免误删同 path 的新字段。
  useLayoutEffect(() => {
    rendererStorage[stringPath] = instanceApi

    return () => {
      if (rendererStorage[stringPath] === instanceApi) {
        delete rendererStorage[stringPath]
      }
    }
  }, [rendererStorage, stringPath, instanceApi])

  // 延迟校验
  const { run: runValidation } = useDebounceFn(
    async (value) => {
      const validationState = await validateFormItem({
        schema,
        rootValue: getRootValue(),
        userCtx,
        path,
        value,
        locale,
        globalValidators: rootCtx.validators,
        rendererValidator: renderer.validator,
        rendererValidatorParams: openValidatorParams,
      })
      applyValidatorState(validationState)
    },
    { wait: 300 }
  )

  // 值回调事件
  const onChange: IOpenComponentParams['onChange'] = useMemoizedFn(
    async (value: any, options = {}) => {
      onRootChange({
        path,
        value,
        extra: options.extra,
      })

      // 校验
      if (options.triggerValidator !== false) {
        runValidation(value)
      } else {
        // 重置校验状态
        applyValidatorState({
          status: EValidationStatus.success,
        })
      }
    }
  )

  // 开放校验器参数
  const openValidatorParams = useMemo(
    () =>
      makeOpenValidatorParams({
        schema,
        path,
        value,
        disabled,
        readonly,
        rootValue,
        userCtx,
        locale,
      }),
    [schema, path, value, disabled, readonly, rootValue, userCtx, locale]
  )

  // 开放 component 参数
  const openComponentParams = {
    ...openValidatorParams,
    validator: validatorState,
    objectStyle: rootCtx.objectStyle,
    onChange,
  }

  // 开放 formItem 参数
  const openFormItemParams = openComponentParams

  // 开发环境：给渲染器组件包一层渲染计数（包装组件按组件引用缓存，不会导致重挂载）
  const ContentRenderer = renderer.component
    ? withRenderLog(renderer.component)
    : undefined
  const FormItemRenderer = renderer.formItem
    ? withRenderLog(renderer.formItem)
    : undefined
  const ReadonlyContentRenderer = renderer.readonlyComponent
    ? withRenderLog(renderer.readonlyComponent)
    : undefined
  const ReadonlyFormItemRenderer = renderer.readonlyFormItem
    ? withRenderLog(renderer.readonlyFormItem)
    : undefined
  const DisabledContentRenderer = renderer.disabledComponent
    ? withRenderLog(renderer.disabledComponent)
    : undefined
  const DisabledFormItemRenderer = renderer.disabledFormItem
    ? withRenderLog(renderer.disabledFormItem)
    : undefined

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
      if (ReadonlyFormItemRenderer) {
        return createElement(ReadonlyFormItemRenderer, openFormItemParams)
      }
      // 其次 readonlyComponent
      if (ReadonlyContentRenderer) {
        return createElement(rootCtx.itemLayout, {
          ...commonOpenLayoutParams,
          body: createElement(ReadonlyContentRenderer, openComponentParams),
        })
      }
    }

    // 是否禁用态
    if (openComponentParams.disabled) {
      // 优先 disabledFormItem
      if (DisabledFormItemRenderer) {
        return createElement(DisabledFormItemRenderer, openFormItemParams)
      }
      // 其次 disabledComponent
      if (DisabledContentRenderer) {
        return createElement(rootCtx.itemLayout, {
          ...commonOpenLayoutParams,
          body: createElement(DisabledContentRenderer, openComponentParams),
        })
      }
    }

    /**
     * 常规态、无「只读态/禁用态」组件时，执行下面逻辑
     */
    // 优先 formItem
    if (FormItemRenderer) {
      return createElement(FormItemRenderer, openFormItemParams)
    }

    // 其次 component
    if (ContentRenderer) {
      return createElement(rootCtx.itemLayout, {
        ...commonOpenLayoutParams,
        body: createElement(ContentRenderer, openComponentParams),
      })
    }
  }

  // 供 useFieldValue 的开发日志定位「哪个组件的哪个字段」；引用稳定，避免消费方多余重渲染
  const fieldContextVal = useMemo(
    () => ({ path, renderType: schema.renderType }),
    [path, schema.renderType]
  )

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
      <FieldPathContext.Provider value={fieldContextVal}>
        <ErrorBoundary catchErrorTips={rootCtx.catchErrorTips}>
          {renderContent()}
        </ErrorBoundary>
      </FieldPathContext.Provider>
    </div>
  )
}

export default memo(RendererExecutor, areRendererPropsEqual)
