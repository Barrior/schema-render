import { useMemo } from 'react'

import Horizontal from '../itemLayouts/Horizontal'
import Vertical from '../itemLayouts/Vertical'
import type { IInnerFormRenderProps } from '../typings'

interface IUseItemLayoutParams {
  itemLayout: IInnerFormRenderProps['itemLayout']
}

export default function useItemLayout({ itemLayout }: IUseItemLayoutParams) {
  // 表单项布局结构处理
  const ItemLayout = useMemo(() => {
    // 没有 itemLayout 或者声明垂直布局时，使用垂直布局
    if (!itemLayout || itemLayout === 'horizontal') {
      return Horizontal
    }

    if (itemLayout === 'vertical') {
      return Vertical
    }

    // 自定义 itemLayout 布局
    return itemLayout
  }, [itemLayout])

  return ItemLayout
}
