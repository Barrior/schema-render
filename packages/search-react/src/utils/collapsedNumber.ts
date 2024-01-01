import type { ISearchProps } from '../typings'

/**
 * 根据容器尺寸计算折叠表单项个数
 * @param container 容器 DOM 元素
 * @param collapsedRows 折叠行数
 * @param customAlgo 自定义算法
 * @returns 折叠个数
 */
export function calcCollapsedNumber(
  container: HTMLElement | null | undefined,
  collapsedRows: number,
  customAlgo?: ISearchProps['calcCollapsedNumber']
) {
  // 采用自定义算法
  if (customAlgo) {
    return customAlgo(container)
  }

  // 容器不存在，返回兜底默认值
  if (!container) {
    return 5
  }

  // 容器宽度
  const containerWidth = container.clientWidth

  // 子节点宽度，取最大值，即 Bounding 宽度
  const childWidth = container.firstElementChild?.getBoundingClientRect()?.width || 320

  // 计算折叠个数算法，以第一个子节点宽度作为计算基数
  return Math.floor(containerWidth / childWidth) * collapsedRows - 1
}
