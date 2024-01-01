import type { MutableRefObject } from 'react'
import { useEffect, useState } from 'react'

import type { ICore } from '..'
import type { IObjectAny } from '../typings/common'
import { generateUID } from '../utils/base'
import useLatest from './useLatest'

interface IDevTool {
  exportValue?: () => IObjectAny
}

declare global {
  interface Window {
    __schema_render_tool__: {
      [uid: string]: IDevTool
    }
  }
}

const DEV_TOOL_KEY = '__schema_render_tool__'

interface IUseDevToolParams {
  valueRef: MutableRefObject<IObjectAny>
  props: ICore
}

export default function useDevTool({ valueRef, props }: IUseDevToolParams) {
  const [uid] = useState(() => generateUID())
  const propsRef = useLatest(props)

  useEffect(() => {
    if (!window[DEV_TOOL_KEY]) {
      window[DEV_TOOL_KEY] = {}
    }

    if (!window[DEV_TOOL_KEY][uid]) {
      window[DEV_TOOL_KEY][uid] = {}
    }

    Object.assign(window[DEV_TOOL_KEY][uid], {
      exportProps: () => propsRef.current,
      exportSchema: () => propsRef.current?.schema,
      exportValue: () => valueRef.current,
    })

    return () => {
      delete window[DEV_TOOL_KEY][uid]
    }
  }, [uid, propsRef, valueRef])

  return { uid }
}
