import { useMemoizedFn, utils } from '@schema-render/core-react'
import type { RefObject } from 'react'
import { useEffect, useRef, useState } from 'react'

import { EClassNames } from '../constants'
import type { ISearchTableProps } from '../typings/index.d'
import { forEach } from '../utils/common'
import { calcOuterHeight, getNumericStyleValue } from '../utils/dom'

const { isUndefined } = utils

interface IUseScrollYParams {
  table: ISearchTableProps['table']
  rootElemRef: RefObject<HTMLElement>
}

/**
 * 表格高度自动适配计算方案：“一屏显示”
 */
export default function useScrollY({ table, rootElemRef }: IUseScrollYParams) {
  const [scrollY, setScrollY] = useState<number | undefined>(
    table.virtual ? 0 : undefined
  )
  const timerRef = useRef<ReturnType<typeof setTimeout>>()

  const calcScrollY = useMemoizedFn(() => {
    if (!rootElemRef.current || !isUndefined(table.scroll?.y)) {
      return
    }

    const tableElem = rootElemRef.current.querySelector(`.${EClassNames.table}`)
    const theadElem = tableElem?.querySelector('thead')
    const tfootElem = tableElem?.querySelector('tfoot')
    const paginationElem = tableElem?.querySelector(`.${EClassNames.pagination}`)
    const tableElements = [theadElem, tfootElem, paginationElem]

    // 内容元素的总高度
    let elementsHeight = 0

    // 累加子节点高度，排除 table
    forEach(rootElemRef.current.children, (child) => {
      // 表格元素的内容高度这里排除，需要单独计算
      if (child !== tableElem) {
        elementsHeight += calcOuterHeight(child as HTMLElement)
      }
    })

    // 加上表格的 marginTop
    elementsHeight += getNumericStyleValue(tableElem as HTMLElement, 'marginTop')

    // 累加表格内元素
    forEach(tableElements, (elem) => {
      elementsHeight += calcOuterHeight(elem as HTMLElement)
    })

    // 设置 scrollY 的值
    setScrollY(rootElemRef.current.clientHeight - elementsHeight)
  })

  /**
   * 更新 scrollY
   * @param delay 延迟执行时间
   * @param checkEnabled 检查 autoScrollY 属性是否开启
   */
  const updateScrollY = useMemoizedFn((delay = 0, checkEnabled = false) => {
    if (checkEnabled && !table.autoScrollY) {
      return
    }
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(calcScrollY, delay)
  })

  /**
   * 窗口变化，表格高度重新计算
   */
  useEffect(() => {
    if (!table.autoScrollY) {
      return
    }
    const handleResize = () => updateScrollY()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return {
    scrollY,
    updateScrollY,
  }
}
