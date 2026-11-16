import { useContext } from 'react'

import FieldPathContext from '../FieldPathContext'
import type { IApiPath, IPath } from '../typings/common'
import { stringifyPath } from '../utils/misc'
import { get } from '../utils/tinyLodash'
import useRootActions from './useRootActions'
import useValueSubscription from './useValueSubscription'

function normalizePath(paths: IApiPath): IPath {
  return typeof paths === 'string' ? paths.split('.') : paths
}

/**
 * 读取并订阅指定字段的数据：只有该路径的值变化时组件才会重渲染。
 * 供渲染器读取「其它字段的业务数据」使用，避免订阅整份 rootValue。
 * 需配合渲染器的 `pure: true` 使用，否则框架仍会每轮重渲染该组件。
 *
 * @example
 * const age = useFieldValue('age')
 * const price = useFieldValue(['order', 'price'])
 */
export default function useFieldValue(paths: IApiPath): any {
  const rootActions = useRootActions()
  const owner = useContext(FieldPathContext)
  const path = normalizePath(paths)

  // 日志标签：<渲染器类型>(<字段 path>) ← <依赖字段 path>
  const ownerLabel = owner
    ? `${owner.renderType ?? 'renderer'}(${stringifyPath(owner.path)})`
    : 'renderer'
  const logLabel = owner
    ? `useFieldValue ${ownerLabel} ← ${stringifyPath(path)}`
    : `useFieldValue ← ${stringifyPath(path)}`

  useValueSubscription([path], { logLabel })

  return get(rootActions.getRootValue(), path)
}
