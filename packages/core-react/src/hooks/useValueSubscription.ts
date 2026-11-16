import { useEffect, useReducer } from 'react'

import type { IPath } from '../typings/common'
import { logRender } from '../utils/devLog'
import useLatest from './useLatest'
import useRootActions from './useRootActions'

export interface IValueSubscriptionOptions {
  /* 记录通知次数（开发日志区分「订阅通知」与「父级重渲染」） */
  notifyRef?: { current: number }
  /* 开发日志标签（渲染器用 useFieldValue 订阅时使用） */
  logLabel?: string
  /* 收到通知时的回调：参数为本次变化、且属于本次订阅范围的路径 */
  onNotify?: (changedPaths: IPath[] | null) => void
}

/**
 * 订阅指定路径的数据变化，变化时强制组件重渲染。
 * paths 为 null 表示订阅整个 rootValue（无法静态确定依赖时使用）。
 */
export default function useValueSubscription(
  paths: IPath[] | null,
  options: IValueSubscriptionOptions = {}
): void {
  const { notifyRef, logLabel, onNotify } = options
  const onNotifyRef = useLatest(onNotify)
  const rootActions = useRootActions()
  const [, forceUpdate] = useReducer((count: number) => count + 1, 0)
  const key = paths ? JSON.stringify(paths) : '*'

  useEffect(() => {
    return rootActions.subscribeValue(paths, (changedPaths) => {
      onNotifyRef.current?.(changedPaths)

      if (notifyRef) {
        notifyRef.current += 1
      } else if (logLabel) {
        // 渲染器自己用 useFieldValue 订阅时，重渲染不经过包装层，这里补一条日志
        logRender(logLabel, undefined, '订阅通知')
      }

      forceUpdate()
    })
    // paths 的数组引用每次渲染都可能变，用序列化后的 key 判断是否需要重新订阅
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rootActions, key])
}
