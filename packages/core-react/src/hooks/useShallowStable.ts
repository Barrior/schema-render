import { useRef } from 'react'

function isShallowComparable(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

export function shallowEqual(a: unknown, b: unknown): boolean {
  if (Object.is(a, b)) {
    return true
  }

  if (!isShallowComparable(a) || !isShallowComparable(b)) {
    return false
  }

  const aKeys = Object.keys(a)
  const bKeys = Object.keys(b)

  if (aKeys.length !== bKeys.length) {
    return false
  }

  return aKeys.every((key) => Object.is(a[key], b[key]))
}

/**
 * 内容浅相等时复用上一次的引用。
 * 用于「应用层每次渲染都传新对象、但内容没变」的配置（locale / renderers / userCtx），
 * 避免它们把下游的 useMemo / memo 全部打断。
 */
export default function useShallowStable<T>(value: T): T {
  const valueRef = useRef(value)

  if (!shallowEqual(valueRef.current, value)) {
    valueRef.current = value
  }

  return valueRef.current
}
