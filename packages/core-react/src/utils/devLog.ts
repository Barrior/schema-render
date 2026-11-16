import type { ComponentType } from 'react'
import { createElement, useLayoutEffect, useRef } from 'react'

import type { IPath } from '../typings/common'
import { stringifyPath } from './misc'

const stats: Record<string, number> = {}
const wrapperCache = new WeakMap<ComponentType<any>, ComponentType<any>>()

let forcedEnabled: boolean | undefined

/**
 * 手动开关渲染日志（测试或临时排查用）。
 * 不传参数时恢复按环境判断。
 */
export function setRenderLogEnabled(value?: boolean): void {
  forcedEnabled = value
}

function isEnabled(): boolean {
  if (forcedEnabled !== undefined) {
    return forcedEnabled
  }

  const flag =
    typeof window !== 'undefined'
      ? (window as unknown as { __SCHEMA_RENDER_LOG__?: boolean }).__SCHEMA_RENDER_LOG__
      : undefined

  // 手动开关优先于环境判断：false 关闭，true 强制开启
  if (flag === false) {
    return false
  }

  if (flag === true) {
    return true
  }

  return process.env.NODE_ENV === 'development'
}

let announced = false

function shouldLogMount(): boolean {
  return (
    typeof window !== 'undefined' &&
    (window as unknown as { __SCHEMA_RENDER_LOG_MOUNT__?: boolean })
      .__SCHEMA_RENDER_LOG_MOUNT__ === true
  )
}

/**
 * 记录一次渲染：控制台输出带累计次数，同时累加到统计表。
 * 用 console.log（Info 级别）而不是 console.debug —— 后者默认被浏览器隐藏。
 * 挂载渲染默认不打印（大表单会刷屏），需要时设置 window.__SCHEMA_RENDER_LOG_MOUNT__ = true。
 */
export function logRender(name: string, path?: IPath, reason?: string): void {
  if (!isEnabled()) {
    return
  }

  const key = path && path.length ? `${name} ${stringifyPath(path)}` : name
  stats[key] = (stats[key] ?? 0) + 1

  if (reason === '首次渲染' && !shouldLogMount()) {
    return
  }

  if (!announced) {
    announced = true
    // eslint-disable-next-line no-console
    console.info(
      '[schema-render] 渲染日志已开启：stats() 查看统计，reset() 清零，enabled(false) 关闭；挂载日志默认静默（window.__SCHEMA_RENDER_LOG_MOUNT__ = true 可开启）'
    )
  }

  const now = typeof performance !== 'undefined' ? performance.now() : Date.now()
  const reasonText = reason ? ` (${reason})` : ''

  // eslint-disable-next-line no-console
  console.log(
    `[schema-render] @${(now / 1000).toFixed(2)}s ${key} 第 ${
      stats[key]
    } 次渲染${reasonText}`
  )
}

export function getRenderStats(): Record<string, number> {
  return { ...stats }
}

export function resetRenderStats(): void {
  Object.keys(stats).forEach((key) => {
    delete stats[key]
  })
}

/**
 * 给自定义渲染器包一层渲染计数（仅开发环境）。
 * 同一个组件复用同一个包装组件，避免包装层变化导致子树重挂载。
 */
export function withRenderLog<P extends object>(
  Component: ComponentType<P>
): ComponentType<P> {
  if (process.env.NODE_ENV === 'production') {
    return Component
  }

  const cached = wrapperCache.get(Component)

  if (cached) {
    return cached as ComponentType<P>
  }

  const Wrapped = (props: P) => {
    const { schema, path } = props as {
      schema?: { renderType?: string }
      path?: IPath
    }
    const mountedRef = useRef(false)

    logRender(
      `renderer:${schema?.renderType ?? 'unknown'}`,
      path,
      mountedRef.current ? undefined : '首次渲染'
    )

    useLayoutEffect(() => {
      mountedRef.current = true
    })

    return createElement(Component, props)
  }

  Wrapped.displayName = `withRenderLog(${
    (Component as { displayName?: string }).displayName || Component.name || 'Component'
  })`

  wrapperCache.set(Component, Wrapped)

  return Wrapped
}

// 挂到 window，方便在控制台查看/清零
if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
  ;(window as unknown as Record<string, unknown>).__schemaRender = {
    stats: getRenderStats,
    reset: resetRenderStats,
    enabled: setRenderLogEnabled,
    // 挂载日志默认静默，用它可以临时打开/关闭（等价于设置 window.__SCHEMA_RENDER_LOG_MOUNT__）
    mountLogs: (visible = true) => {
      ;(
        window as unknown as { __SCHEMA_RENDER_LOG_MOUNT__?: boolean }
      ).__SCHEMA_RENDER_LOG_MOUNT__ = visible
    },
  }
}
