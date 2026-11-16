import type { FC } from 'react'
import { memo, useLayoutEffect, useRef } from 'react'

import useRootContext from '../hooks/useRootContext'
import type { ICommonProps } from '../typings/common'
import assert from '../utils/assert'
import { logRender } from '../utils/devLog'
import { matchRenderer } from '../utils/renderer'
import RendererExecutor from './RendererExecutor'

interface IProps extends ICommonProps {
  /* 计算完成的 gridColumn 值 */
  gridColumn?: string
}

const RendererDistributor: FC<IProps> = (props) => {
  // 只消费静态配置：数据变化不再触发本组件重渲染
  const rootCtx = useRootContext()
  const { schema, path, gridColumn } = props

  const renderSnapshotRef = useRef<{
    schema: unknown
    path: unknown
    gridColumn?: string
    staticCtx: unknown
  } | null>(null)
  const previousSnapshot = renderSnapshotRef.current

  let renderReason = '首次渲染'

  if (previousSnapshot) {
    if (
      previousSnapshot.schema !== schema ||
      previousSnapshot.path !== path ||
      previousSnapshot.gridColumn !== gridColumn
    ) {
      renderReason = 'props 变化'
    } else if (previousSnapshot.staticCtx !== rootCtx) {
      renderReason = '静态 Context 变化'
    } else {
      renderReason = '父级重渲染'
    }
  }

  logRender('RendererDistributor', path, renderReason)

  useLayoutEffect(() => {
    renderSnapshotRef.current = { schema, path, gridColumn, staticCtx: rootCtx }
  })

  const { renderers } = rootCtx

  assert.falsy(schema, 'schema is required in RendererDistributor Props.')

  const renderer = matchRenderer(renderers, schema.renderType)

  if (!renderer) {
    return null
  }

  return <RendererExecutor {...props} renderer={renderer} />
}

// 字段值经 ValueStore 订阅直达 Executor，props 只剩结构信息：
// 父级（Iterator）因 hidden 依赖变化重渲染时，未变化的字段在这里直接跳过。
// 配置类变更走 Context，不受 memo 影响。
export default memo(RendererDistributor)
