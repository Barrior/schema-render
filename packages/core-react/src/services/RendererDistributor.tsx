import type { FC } from 'react'

import useRootContext from '../hooks/useRootContext'
import type { ICommonProps } from '../typings/common'
import assert from '../utils/assert'
import { matchRenderer } from '../utils/renderer'
import RendererExecutor from './RendererExecutor'

const RendererDistributor: FC<ICommonProps> = (props) => {
  const rootCtx = useRootContext()
  const { schema } = props

  assert.falsy(schema, 'schema is required in RendererDistributor Props.')

  const renderer = matchRenderer(rootCtx.renderers, schema.renderType)

  if (!renderer) {
    return null
  }

  return <RendererExecutor {...props} renderer={renderer} />
}

export default RendererDistributor
