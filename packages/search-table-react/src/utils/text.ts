export type IEllipsisPlacement = 'start' | 'middle' | 'end'

const ELLIPSIS = '...'

/**
 * 省略号文本
 * @param text 原始文本
 * @param maxLength 显示长度
 * @param placement 省略号位置
 * @return 加省略号处理后的文本
 * @example
 * ellipsisText('1234567890', 8, 'start') // ...67890
 * ellipsisText('1234567890', 8, 'middle') // 123...90
 * ellipsisText('1234567890', 8, 'end') // 12345...
 */
export const ellipsisText = (
  text: string,
  maxLength: number,
  placement: IEllipsisPlacement
) => {
  // 用 Array.from 按 Unicode 字符切，避免 emoji 被截断
  const chars = Array.from(text)

  if (chars.length <= maxLength) return text

  const ellipsisLength = ELLIPSIS.length
  const visibleLength = Math.max(0, maxLength - ellipsisLength)

  if (visibleLength === 0) {
    return chars.slice(0, maxLength)
  }

  if (placement === 'start') {
    return `${ELLIPSIS}${chars.slice(-visibleLength).join('')}`
  }

  if (placement === 'middle') {
    const startLength = Math.ceil(visibleLength / 2)
    const endLength = Math.floor(visibleLength / 2)

    const startText = chars.slice(0, startLength).join('')
    const endText = endLength > 0 ? chars.slice(-endLength).join('') : ''

    return `${startText}${ELLIPSIS}${endText}`
  }

  // 默认 end
  return `${chars.slice(0, visibleLength).join('')}${ELLIPSIS}`
}
