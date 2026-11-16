import type { FC } from 'react'
import { Fragment, memo, useLayoutEffect, useMemo, useRef } from 'react'

import { ELayout } from '../constants'
import useRootActions from '../hooks/useRootActions'
import useRootContext from '../hooks/useRootContext'
import useValueSubscription from '../hooks/useValueSubscription'
import type { ICommonProps, IPath } from '../typings/common'
import type { IObjectSchema, IRootSchema, ISchema } from '../typings/schema'
import { isNumber } from '../utils/checking'
import { getChildrenHiddenMeta } from '../utils/deps'
import { logRender } from '../utils/devLog'
import { stringifyPath } from '../utils/misc'
import { internPath } from '../utils/path'
import { performStatement } from '../utils/statement'
import { get } from '../utils/tinyLodash'
import RendererDistributor from './RendererDistributor'

// export interface IBeforeEachResult {
//   // 子节点状态
//   childState?: IObjectAny
//   // 自定义渲染节点
//   node?: ReactNode
// }

// export interface IBeforeEachParams {
//   schema: ISchema
//   path: IPath
// }

// export interface IProps extends ICommonProps<IObjectSchema> {
//   onBeforeEach?: (p: IBeforeEachParams) => IBeforeEachResult
//   onAfterEach?: (p: IBeforeEachParams) => IBeforeEachResult
//   onBeforeItemRender?: () => {}
// }

const RendererIterator: FC<ICommonProps<IObjectSchema | IRootSchema>> = ({
  schema,
  path,
}) => {
  const rootCtx = useRootContext()
  const rootActions = useRootActions()
  const { userCtx, layout } = rootCtx
  const { getRootValue } = rootActions

  const renderSnapshotRef = useRef<{
    schema: unknown
    path: unknown
    staticCtx: unknown
    actionsCtx: unknown
  } | null>(null)
  const previousSnapshot = renderSnapshotRef.current

  let renderReason = '首次渲染'

  if (previousSnapshot) {
    if (previousSnapshot.schema !== schema || previousSnapshot.path !== path) {
      renderReason = 'props 变化'
    } else if (previousSnapshot.staticCtx !== rootCtx) {
      renderReason = '静态 Context 变化'
    } else if (previousSnapshot.actionsCtx !== rootActions) {
      renderReason = '动作 Context 变化'
    } else {
      renderReason = 'hidden 依赖变化'
    }
  }

  logRender('RendererIterator', path, renderReason)

  useLayoutEffect(() => {
    renderSnapshotRef.current = {
      schema,
      path,
      staticCtx: rootCtx,
      actionsCtx: rootActions,
    }
  })

  // 子级 hidden 的依赖：unionDeps 用于订阅，depsByField 用于按字段判断是否需要重算
  const hiddenMeta = useMemo(() => getChildrenHiddenMeta(schema, path), [schema, path])

  // 待消费的变更路径：null 表示「未知，需要全量重算」，[] 表示没有待处理变更
  const changedPathsRef = useRef<IPath[] | null>(null)

  useValueSubscription(hiddenMeta.unionDeps, {
    onNotify: (changedPaths) => {
      const pending = changedPathsRef.current

      if (pending === null || changedPaths === null) {
        changedPathsRef.current = null
        return
      }

      changedPathsRef.current = [...pending, ...changedPaths]
    },
  })

  // 每个字段的 hidden 求值缓存：依赖与本次变更路径不相交时直接复用
  const hiddenCacheRef = useRef<{
    schema: unknown
    path: unknown
    results: Map<string, { deps: IPath[] | null; hidden: boolean }>
  } | null>(null)

  const rootValue = getRootValue()

  // path 为 [] 表示根节点
  const value = path.length ? get(rootValue, path) : rootValue

  // 取走待消费的变更路径（React 可能在提交前多次渲染，缓存能保证结果一致）
  let changedPaths = changedPathsRef.current
  changedPathsRef.current = []

  // 首次挂载 / props 变化 / 静态 Context 变化：无法排除 userCtx 等非数据依赖，全量重算
  if (renderReason !== 'hidden 依赖变化') {
    changedPaths = null
  }

  if (
    !hiddenCacheRef.current ||
    hiddenCacheRef.current.schema !== schema ||
    hiddenCacheRef.current.path !== path
  ) {
    hiddenCacheRef.current = { schema, path, results: new Map() }
  }

  const hiddenCache = hiddenCacheRef.current.results
  const changedKeys =
    changedPaths === null
      ? null
      : new Set(changedPaths.map((changed) => JSON.stringify(changed)))

  const getHidden = (field: string, subSchema: ISchema): boolean => {
    const deps = hiddenMeta.depsByField.get(field) ?? null
    const cached = hiddenCache.get(field)

    if (
      changedKeys &&
      deps &&
      cached &&
      !deps.some((dep) => changedKeys.has(JSON.stringify(dep)))
    ) {
      return cached.hidden
    }

    // 开发日志：可观察「这一次到底哪些字段重新求值了」（挂载日志默认静默）
    logRender(
      'hidden 求值',
      [...path, field],
      renderReason === '首次渲染' ? '首次渲染' : '重算'
    )

    const hidden = performStatement({
      statement: subSchema.hidden,
      parentValue: value,
      rootValue,
      userCtx,
    })

    hiddenCache.set(field, { deps, hidden })
    return hidden
  }

  // 上一个 column 起始值
  let prevColumnStart = 1

  // onBeforeEach?.()

  const items = Object.keys(schema.properties).map((field) => {
    const subSchema = schema.properties[field]

    // 执行 hidden 语法（只对依赖命中的字段重新求值）
    const shouldHidden = getHidden(field, subSchema)

    if (shouldHidden) {
      return null
    }

    const subPath = internPath(path, field)
    const uniqueKey = stringifyPath(subPath)

    // const res = onBeforeItemRender?.({ schema: subSchema, path: subPath })

    // // 自定义内容
    // if (res?.node !== undefined && React.isValidElement(res.node)) {
    //   return res.node
    // }

    // const rendererProps = {
    //   ...res?.state,
    //   schema: subSchema,
    //   path: subPath,
    // }

    /**
     * 计算 gridColumn 值
     * span 值如果是:   8      8       8
     * 计算结果应该是:  1/9    9/17   17/25
     */
    let gridColumn: string | undefined

    // 常规模式支持 span 和 spanStart
    if (layout === ELayout.normal) {
      let start = prevColumnStart
      let end = 25

      // 没有 span 和 spanStart 属性时，恢复常规模式
      if (!isNumber(subSchema.span) && !isNumber(subSchema.spanStart)) {
        start = prevColumnStart = 1
      } else {
        // 不允许 spanStart 和 span 为 0
        // 优先处理 spanStart
        if (subSchema.spanStart) {
          start = subSchema.spanStart
          prevColumnStart = start
        }

        // span 最后决定下一个 column 的起始位置 start
        if (subSchema.span) {
          end = start + subSchema.span
          prevColumnStart = end
        }
      }

      gridColumn = `${start}/${end}`
    } else {
      // autoFill 与 autoFit 模式只支持 spanStart
      if (isNumber(subSchema.spanStart)) {
        gridColumn = `${subSchema.spanStart}/auto`
      }
    }

    return (
      <RendererDistributor
        key={uniqueKey}
        schema={subSchema}
        path={subPath}
        gridColumn={gridColumn}
      />
    )
  })

  // onAfterEach?.()

  return <Fragment>{items}</Fragment>
}

export default memo(RendererIterator)
