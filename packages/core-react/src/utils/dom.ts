import type { IWindow } from '../typings/common'

/**
 * 计算「指定元素」到指定的「定位的祖先元素」的距离
 * https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetParent
 * @param child 子元素
 * @param ancestor 祖先元素
 */
export function positionedOffset(
  child?: HTMLElement | null,
  ancestor?: HTMLElement | IWindow | null
) {
  if (!child || !ancestor) {
    return { left: 0, top: 0 }
  }

  let left = 0
  let top = 0
  let current: HTMLElement | null = child

  while (current) {
    if (current === ancestor) {
      break
    }
    left += current.offsetLeft
    top += current.offsetTop
    current = current.offsetParent as HTMLElement | null
  }

  return { left, top }
}
