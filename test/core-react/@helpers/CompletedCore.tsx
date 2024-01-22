import type { ICore, ICoreRef, IPartPartial } from '@core-react/index'
import Core from '@core-react/index'
import type { Ref } from 'react'
import { forwardRef, useMemo } from 'react'

import renderers from './renderers'
import Vertical from './Vertical'

type IProps = IPartPartial<ICore, 'itemLayout' | 'renderers'>

const CompletedCore = (props: IProps, ref?: Ref<ICoreRef>) => {
  // 渲染器集合处理
  const innerRenderers = useMemo(
    () => ({ ...renderers, ...props.renderers }),
    [props.renderers]
  )

  return (
    <Core
      {...props}
      ref={ref}
      itemLayout={props.itemLayout || Vertical}
      renderers={innerRenderers}
    />
  )
}

export default forwardRef(CompletedCore)
