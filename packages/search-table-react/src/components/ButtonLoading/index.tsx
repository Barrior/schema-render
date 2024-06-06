import type { IMaybePromise } from '@schema-render/core-react'
import { useMemoizedFn, utils } from '@schema-render/core-react'
import type { ButtonProps } from 'antd'
import { Button } from 'antd'
import type { MouseEvent } from 'react'
import { useState } from 'react'

const { logger } = utils

type IButtonEvent = MouseEvent<HTMLElement, MouseEvent>

interface IButtonLoadingProps extends Omit<ButtonProps, 'onClick'> {
  /**
   * 按钮内容
   */
  children: React.ReactNode
  /**
   * 点击事件处理
   */
  onClick?: (e: IButtonEvent) => IMaybePromise<void | unknown>
  /**
   * 不要 loading 效果
   */
  noLoading?: boolean
}

/**
 * 内置加载 loading 的按钮
 * click 事件返回 promise 即可
 */
export default function ButtonLoading({
  children,
  onClick,
  noLoading = false,
  ...restProps
}: IButtonLoadingProps) {
  const [loading, setLoading] = useState(false)

  const handleClick = useMemoizedFn(async (e: IButtonEvent) => {
    if (noLoading) {
      onClick?.(e)
      return
    }

    setLoading(true)
    try {
      await onClick?.(e)
    } catch (err) {
      logger.warn(err)
    }
    setLoading(false)
  })

  return (
    <Button loading={loading} {...restProps} onClick={handleClick as never}>
      {children}
    </Button>
  )
}
