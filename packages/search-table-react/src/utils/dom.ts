import { utils } from '@schema-render/core-react'

const { isString } = utils

/**
 * 计算元素高度，包含 margin 值
 * @param element DOM 元素
 * @returns 高度
 */
export function calcOuterHeight(element?: HTMLElement | null) {
  if (!element) {
    return 0
  }

  const style = window.getComputedStyle(element, null)
  const margin = parseFloat(style.marginTop) + parseFloat(style.marginBottom)
  return element.offsetHeight + margin
}

/**
 * 获取元素属性值，并转换成数字类型
 * @param element DOM 元素
 * @param attr 属性
 */
export function getNumericStyleValue(
  element?: HTMLElement | null,
  attr?: keyof CSSStyleDeclaration
) {
  if (!element || !attr) {
    return 0
  }

  const style = window.getComputedStyle(element, null)
  const value = style[attr]

  // 数字类型字符串才做处理
  if (isString(value) && value.match(/^\d+/)) {
    return parseFloat(value)
  }

  return 0
}
