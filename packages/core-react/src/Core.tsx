import type { Ref } from 'react'
import { forwardRef, useMemo, useRef } from 'react'

import ErrorBoundary from './components/ErrorBoundary'
import useCoreValue from './hooks/useCoreValue'
import useLayoutStyle, { LAYOUT_MIN_MAX } from './hooks/useLayoutStyle'
import useOpenApi from './hooks/useOpenApi'
import zhCN from './locale/zh_CN'
import RootContext from './RootContext'
import RendererIterator from './services/RendererIterator'
import type { IDeepWriteable, IPartRequired } from './typings/common'
import type { ICore, ICoreRef } from './typings/core'
import type { IRootContext } from './typings/rootContext'
import assert from './utils/assert'
import { classNamesWithPrefix } from './utils/base'
import type { IClassNamesParams } from './utils/classnames'
import classNames from './utils/classnames'
import { mapKeys, pick } from './utils/tinyLodash'

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
  assert.falsy(coreProps.schema, 'missing schema.')
  assert.falsy(coreProps.itemLayout, 'missing itemLayout.')

  const props: ICoreProps = { ...(DEFAULT_CONFIG as DC_TYPE), ...coreProps }
  const rootElementRef = useRef<HTMLDivElement>(null)
  const rootContextRef = useRef<IRootContext>({} as IRootContext)

  // 表单数据 value 控制
  const { value, onChange, getValue, setValue, resetValue } = useCoreValue(props)

  // 合并语言
  const locale = useMemo(
    () => ({
      ...zhCN,
      ...props.locale,
    }),
    [props.locale]
  )

  // 处理渲染器与其名称
  const renderers = useMemo(
    () => mapKeys(props.renderers, (_, key) => key.toLowerCase()),
    [props.renderers]
  )

  // 计算布局样式
  const layoutStyle = useLayoutStyle(props)

  // root context value
  const rootCtxVal = (rootContextRef.current = {
    ...pick(
      props,
      'disabled',
      'readonly',
      'prefixCls',
      'layout',
      'itemLayout',
      'userCtx',
      'validators',
      'catchErrorTips'
    ),
    objectStyle: layoutStyle,
    renderers,
    rootSchema: props.schema,
    rootValue: value,
    locale,
    rendererStorage: {},
    // 事件
    onChange,
    // 方法
    prefixClassNames: (...args: IClassNamesParams) =>
      classNamesWithPrefix(props.prefixCls, ...args),
  })

  // 开放 API
  useOpenApi({ ref, rootElementRef, rootContextRef, getValue, setValue, resetValue })

  return (
    <RootContext.Provider value={rootCtxVal}>
      <div
        className={classNames(rootCtxVal.prefixCls, props.className, {
          'is-disabled': rootCtxVal.disabled,
          'is-readonly': rootCtxVal.readonly,
        })}
        ref={rootElementRef}
        style={{
          ...props.style,
          ...layoutStyle,
        }}
      >
        <RendererIterator schema={rootCtxVal.rootSchema} path={[]} />
      </div>
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
