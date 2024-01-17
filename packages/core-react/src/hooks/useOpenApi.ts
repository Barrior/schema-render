import type { Ref, RefObject } from 'react'
import { useImperativeHandle } from 'react'

import { EValidationStatus } from '../constants'
import type { ICoreRef, IScrollToOptions } from '../typings/core.d'
import type { IRootContext } from '../typings/rootContext'
import { isArray, isString } from '../utils/checking'
import { positionedOffset } from '../utils/dom'
import { stringifyPath } from '../utils/misc'
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

type IPaths = string | string[]

/**
 * 内部滚动到指定表单项位置方法
 * @param formItemElement 表单项 DOM  元素
 * @param coreRootElement 内核根节点元素
 * @param options 参数
 */
function internalScrollTo(
  formItemElement?: HTMLElement | null,
  coreRootElement?: HTMLElement | null,
  options: IScrollToOptions = {}
) {
  if (!formItemElement) {
    return
  }

  // 解构参数，并赋予默认值
  const { positionedElement, xAxis, yAxis, behavior = 'smooth', gap = 0 } = options

  // 表单内部滚动，取根节点元素，否则取用户指定的 “定位元素”
  const scrollElement: IScrollToOptions['positionedElement'] =
    positionedElement || coreRootElement

  if (scrollElement) {
    // 获取指定表单项元素到滚动祖先元素的距离
    const offset = positionedOffset(formItemElement, scrollElement)
    // 滚动到指定位置
    scrollElement.scrollTo({
      left: xAxis === false ? undefined : offset.left + gap,
      top: yAxis === false ? undefined : offset.top + gap,
      behavior,
    })
  }
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

  /**
   * 查找指定表单项
   */
  const findItem = useMemoizedFn((paths?: IPaths) => {
    const renderers = rootContextRef.current?.rendererStorage
    if (renderers && paths) {
      const sPath = isArray(paths) ? stringifyPath(paths) : paths
      return renderers[sPath]
    }
  })

  /**
   * 重置错误与警告
   */
  const resetError = useMemoizedFn((paths?: IPaths) => {
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

  /**
   * 获取 Core 根节点元素
   */
  const getRootElement = useMemoizedFn(() => rootElementRef.current)

  /**
   * 滚动到指定位置
   */
  const scrollTo = useMemoizedFn((paths?: IPaths, options?: IScrollToOptions) =>
    internalScrollTo(findItem(paths)?.getRootElement(), getRootElement(), options)
  )

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
      scrollTo,
      findItem,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )
}
