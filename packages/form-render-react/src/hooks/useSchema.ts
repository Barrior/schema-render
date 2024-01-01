import { useMemo } from 'react'

import { ACTIONS_RENDER_MODE } from '../constants'
import type { IInnerFormRenderProps } from '../typings'
import { addActionsSchema } from '../utils'

type IUseSchemaParams = Pick<
  IInnerFormRenderProps,
  'schema' | 'actionsRestSchema' | 'actionsRenderMode'
>

/**
 * 处理 Actions 为 Schema 渲染器模式
 */
export default function useSchema({
  schema,
  actionsRestSchema,
  actionsRenderMode,
}: IUseSchemaParams) {
  return useMemo(() => {
    return actionsRenderMode === ACTIONS_RENDER_MODE.normal
      ? schema
      : addActionsSchema(schema, actionsRestSchema)
  }, [schema, actionsRestSchema, actionsRenderMode])
}
