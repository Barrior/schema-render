import type { ICoreRef } from '@schema-render/core-react'
import { useMemoizedFn, utils } from '@schema-render/core-react'
import type { FormEvent, RefObject } from 'react'
import { useState } from 'react'

import type { IAction } from '../constants'
import { ACTIONS, ACTIONS_DEFAULT_LOADING_STATE } from '../constants'
import type { IInnerFormRenderProps } from '../typings'

interface IUseActionsParams {
  props: IInnerFormRenderProps
  coreRef: RefObject<ICoreRef>
}

/**
 * 操作行为按钮事件
 */
export default function useActions({ props, coreRef }: IUseActionsParams) {
  const [actionsLoading, setActionsLoading] = useState(ACTIONS_DEFAULT_LOADING_STATE)

  // 事件处理器通用函数
  const handlerWrapper = useMemoizedFn(
    async (actionName: IAction, handler: () => Promise<void>) => {
      setActionsLoading((prev) => ({ ...prev, [actionName]: true }))

      await handler().catch((err) => {
        utils.logger.warn(err)
      })

      setActionsLoading((prev) => ({ ...prev, [actionName]: false }))
    }
  )

  // 提交事件处理
  const handleSubmit = useMemoizedFn(() => {
    handlerWrapper(ACTIONS.submit, async () => {
      if (!coreRef.current) {
        return
      }

      // 触发 onSubmit 事件前是否执行表单校验
      if (props.validateFormOnSubmit) {
        const res = await coreRef.current.validate()

        // 表单项存在错误或警告，不执行提交事件
        if (res.hasError || res.hasWarning) {
          return
        }
      }

      // 触发提交事件
      await props.onSubmit?.(coreRef.current.getValue())
    })
  })

  // Form onSubmit 事件提交处理
  const handleFormSubmit = useMemoizedFn((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    event.stopPropagation()
    handleSubmit()
  })

  // 重置处理
  const handleReset = useMemoizedFn(() => {
    handlerWrapper(ACTIONS.reset, async () => {
      if (!coreRef.current) {
        return
      }

      // 触发重置前置事件
      const res = await props.onBeforeReset?.(coreRef.current.getValue())

      const nextValue = { ...res }

      // 重置数据，可填入重置后数据
      coreRef.current.setValue(nextValue)

      // 重置错误提示
      coreRef.current.resetError()

      // 触发重置事件
      await props.onReset?.(nextValue)
    })
  })

  return {
    handleFormSubmit,
    handleSubmit,
    handleReset,
    actionsLoading,
    isLoading: actionsLoading.submit || actionsLoading.reset,
  }
}
