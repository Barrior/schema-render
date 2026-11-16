import type { CSSProperties, Ref } from 'react'
import { forwardRef, useLayoutEffect, useMemo, useRef } from 'react'

import ErrorBoundary from './components/ErrorBoundary'
import useCoreValue from './hooks/useCoreValue'
import useLayoutStyle, { LAYOUT_MIN_MAX } from './hooks/useLayoutStyle'
import useOpenApi from './hooks/useOpenApi'
import useShallowStable from './hooks/useShallowStable'
import zhCN from './locale/zh_CN'
import RootActionsContext from './RootActionsContext'
import RootContext from './RootContext'
import RootValueContext from './RootValueContext'
import RendererIterator from './services/RendererIterator'
import type { IDeepWriteable, IDictionary, IPartRequired } from './typings/common'
import type { ICore, ICoreRef } from './typings/core'
import type {
  IRendererInstance,
  IRootActionsContext,
  IRootContext,
  IRootStaticContext,
  IRootValueContext,
} from './typings/rootContext'
import assert from './utils/assert'
import { classNamesWithPrefix } from './utils/base'
import type { IClassNamesParams } from './utils/classnames'
import classNames from './utils/classnames'
import { logRender } from './utils/devLog'
import { getRootPath } from './utils/path'
import { mapKeys } from './utils/tinyLodash'
import ValueStore from './utils/valueStore'

const DEFAULT_CONFIG = {
  prefixCls: 'schema-render',
  layout: 'normal',
  layoutColumnGap: 10,
  layoutRowGap: 15,
  layoutMinMax: LAYOUT_MIN_MAX,
  disabled: false,
  readonly: false,
  validators: {},
  userCtx: {},
} as const

type DC_TYPE = IDeepWriteable<typeof DEFAULT_CONFIG>

type DC_TYPE_KEYS = keyof DC_TYPE

type ICoreProps = IPartRequired<ICore, DC_TYPE_KEYS>

const InnerCore = forwardRef((coreProps: ICore, ref?: Ref<ICoreRef>) => {
  const mountedRef = useRef(false)

  logRender('Core', undefined, mountedRef.current ? undefined : '首次渲染')

  useLayoutEffect(() => {
    mountedRef.current = true
  })

  assert.falsy(coreProps.schema, 'missing schema.')
  assert.falsy(coreProps.itemLayout, 'missing itemLayout.')

  const props: ICoreProps = { ...(DEFAULT_CONFIG as DC_TYPE), ...coreProps }
  const {
    disabled,
    readonly,
    prefixCls,
    layout,
    itemLayout,
    userCtx,
    validators,
    catchErrorTips,
    schema,
  } = props
  const rootElementRef = useRef<HTMLDivElement>(null)
  const rootContextRef = useRef<IRootContext>({} as IRootContext)

  // 值变化时同步通知订阅者：在输入事件里完成，保证与父组件更新同批渲染
  const valueStoreRef = useRef<ValueStore | null>(null)

  if (!valueStoreRef.current) {
    valueStoreRef.current = new ValueStore(props.defaultValue ?? {})
  }

  const valueStore = valueStoreRef.current

  // 表单数据 value 控制
  const { value, valueRef, onChange, getValue, setValue, resetValue } = useCoreValue(
    props,
    (nextValue) => valueStore.setValue(nextValue)
  )

  // 合并语言
  const mergedLocale = useMemo(
    () => ({
      ...zhCN,
      ...props.locale,
    }),
    [props.locale]
  )
  const locale = useShallowStable(mergedLocale)

  // 处理渲染器与其名称
  const mergedRenderers = useMemo(
    () => mapKeys(props.renderers, (_, key) => key.toLowerCase()),
    [props.renderers]
  )
  const renderers = useShallowStable(mergedRenderers)

  // 应用层每次渲染都传新对象时，内容没变就复用旧引用
  const stableUserCtx = useShallowStable(userCtx)
  const stableValidators = useShallowStable(validators)

  // 计算布局样式
  const layoutStyle = useLayoutStyle(props)

  // 静态配置：只在配置变化时产生新引用，数据变化不影响它
  const staticCtxVal = useMemo<IRootStaticContext>(
    () => ({
      disabled,
      readonly,
      prefixCls,
      layout,
      itemLayout,
      userCtx: stableUserCtx,
      validators: stableValidators,
      catchErrorTips,
      objectStyle: layoutStyle,
      renderers,
      rootSchema: schema,
      locale,
      prefixClassNames: (...args: IClassNamesParams) =>
        classNamesWithPrefix(prefixCls, ...args),
    }),
    [
      disabled,
      readonly,
      prefixCls,
      layout,
      itemLayout,
      stableUserCtx,
      stableValidators,
      catchErrorTips,
      layoutStyle,
      renderers,
      schema,
      locale,
    ]
  )

  // 动态数据：value 变化时产生新引用（只有迭代器这类「数据驱动结构」才订阅）
  const valueCtxVal = useMemo<IRootValueContext>(
    () => ({
      rootValue: value,
    }),
    [value]
  )

  // 稳定动作：引用不变，字段组件订阅它不会因数据变化重渲染
  const rendererStorageRef = useRef<IDictionary<IRendererInstance>>({})

  // 兜底：受控模式下应用层直接改 value（不经 onChange）时，提交后同步到 store
  useLayoutEffect(() => {
    valueStore.setValue(value)
  }, [valueStore, value])

  const actionsCtxVal = useMemo<IRootActionsContext>(
    () => ({
      rendererStorage: rendererStorageRef.current,
      onChange,
      getRootValue: () => valueRef.current,
      subscribeValue: (paths, listener) => valueStore.subscribe(paths, listener),
    }),
    [onChange, valueRef, valueStore]
  )

  // 命令式 API 需要合并视图：原地更新，避免每次渲染重建一份静态配置
  Object.assign(rootContextRef.current, staticCtxVal, valueCtxVal, actionsCtxVal)

  // 根节点样式合并结果缓存：数据变化与样式无关，不必每次渲染重建
  const rootStyle = useMemo<CSSProperties>(
    () => ({
      position: 'relative',
      ...layoutStyle,
      ...props.style,
    }),
    [layoutStyle, props.style]
  )

  // 开放 API
  useOpenApi({ ref, rootElementRef, rootContextRef, getValue, setValue, resetValue })

  return (
    <RootContext.Provider value={staticCtxVal}>
      <RootActionsContext.Provider value={actionsCtxVal}>
        <RootValueContext.Provider value={valueCtxVal}>
          <div
            className={classNames(staticCtxVal.prefixCls, props.className, {
              'is-disabled': staticCtxVal.disabled,
              'is-readonly': staticCtxVal.readonly,
            })}
            ref={rootElementRef}
            style={rootStyle}
          >
            <RendererIterator schema={staticCtxVal.rootSchema} path={getRootPath()} />
          </div>
        </RootValueContext.Provider>
      </RootActionsContext.Provider>
    </RootContext.Provider>
  )
})

const Core = forwardRef((props: ICore, ref?: Ref<ICoreRef>) => {
  return (
    <ErrorBoundary catchErrorTips={props.catchErrorTips}>
      <InnerCore {...props} ref={ref} />
    </ErrorBoundary>
  )
})

export default Core
