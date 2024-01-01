import { useMemo } from 'react'

import { ELayout } from '../constants'
import type { ICore } from '../typings/core'
import { normalizeStyleValue } from '../utils/misc'

export const LAYOUT_MIN_MAX = ['320px', '1fr'] as const

/**
 * 计算 grid 布局样式值
 * @returns 根节点样式值
 */
export default function useLayoutStyle({
  layout,
  layoutMinMax,
  layoutColumnGap,
  layoutRowGap,
}: Pick<ICore, 'layout' | 'layoutMinMax' | 'layoutColumnGap' | 'layoutRowGap'>) {
  const min = layoutMinMax?.[0]
  const max = layoutMinMax?.[1]

  const gridTemplateColumns = useMemo(() => {
    if (layout === ELayout.normal) {
      return 'repeat(24, 1fr)'
    }

    const autoMode = layout === ELayout.autoFill ? 'auto-fill' : 'auto-fit'
    const minValue = normalizeStyleValue(min ?? LAYOUT_MIN_MAX[0])
    const maxValue = normalizeStyleValue(max ?? LAYOUT_MIN_MAX[1])

    return `repeat(${autoMode}, minmax(${minValue}, ${maxValue}))`
  }, [layout, min, max])

  // 设置布局样式
  const layoutStyle = {
    display: 'grid',
    gridTemplateColumns,
    columnGap: layoutColumnGap,
    rowGap: layoutRowGap,
  }

  return layoutStyle
}
