import type { Ref, RefObject } from 'react'
import { useImperativeHandle } from 'react'

import { EValidationStatus } from '../constants'
import type { ICoreRef } from '../typings/core.d'
import type { IRootContext } from '../typings/rootContext'
import { isString } from '../utils/checking'
import { pick } from '../utils/tinyLodash'
import { validateRootSchema } from '../utils/validator'
import useMemoizedFn from './useMemoizedFn'

export interface IOpenApiParams {
  ref?: Ref<ICoreRef>
  rootElementRef: RefObject<HTMLDivElement>
  rootContextRef: RefObject<IRootContext>
  getValue: ICoreRef['getValue']
  setValue: ICoreRef['setValue']
  resetValue: ICoreRef['resetValue']
}

/**
 * 开放 API
 */
export default function useOpenApi({
  ref,
  rootElementRef,
  rootContextRef,
  getValue,
  setValue,
  resetValue,
}: IOpenApiParams) {
  const validate = useMemoizedFn(() => {
    return validateRootSchema(
      pick(
        rootContextRef.current,
        'rootSchema',
        'rootValue',
        'locale',
        'disabled',
        'readonly',
        'renderers',
        'rendererStorage',
        'validators',
        'userCtx'
      )
    )
  })

  const resetError = useMemoizedFn((paths?: string | string[]) => {
    const renderers = rootContextRef.current?.rendererStorage
    if (renderers) {
      const pathList = !paths ? Object.keys(renderers) : isString(paths) ? [paths] : paths
      pathList.forEach((pathKey) => {
        renderers[pathKey]?.setValidatorState({
          status: EValidationStatus.success,
        })
      })
    }
  })

  const getRootElement = useMemoizedFn(() => rootElementRef.current)

  // 暴露开放 API
  useImperativeHandle(
    ref,
    () => ({
      validate,
      resetError,
      setValue,
      resetValue,
      getValue,
      getRootElement,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )
}
