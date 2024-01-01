import { useLatest } from '@schema-render/core-react'
import type { IFormRenderRef } from '@schema-render/form-render-react'
import type { RefObject } from 'react'
import { useEffect, useRef } from 'react'

/**
 * 容器元素窗口尺寸变化 hooks
 */
export default function useResize(
  formRenderRef: RefObject<IFormRenderRef>,
  fn: (element: HTMLElement) => void
) {
  const fnRef = useLatest(fn)

  // 设置 -1，保证第一次 ResizeObserver 会执行
  const prevWidth = useRef(-1)

  useEffect(() => {
    const element = formRenderRef.current?.getRootElement()

    if (!element) {
      return
    }

    const resizeObserver = new ResizeObserver((entries) => {
      const width = entries[0].contentRect.width

      // 只有元素宽度变化才触发回调
      if (prevWidth.current !== width) {
        prevWidth.current = width
        fnRef.current(element)
      }
    })

    resizeObserver.observe(element)

    return () => resizeObserver.disconnect()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
