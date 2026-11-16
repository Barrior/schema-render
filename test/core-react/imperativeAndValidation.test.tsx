import type { ICoreRef } from '@core-react/index'
import { wrapRootSchema } from '@test/@helpers/schema'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { createRef } from 'react'

import CompletedCore from './@helpers/CompletedCore'

const baseSchema = wrapRootSchema({
  width: {
    title: '宽度',
    renderType: 'InputNumber',
    className: 'cls-width',
    required: true,
    renderOptions: { 'data-testid': 'tid-width' },
  },
  height: {
    title: '高度',
    renderType: 'InputNumber',
    required: true,
    renderOptions: { 'data-testid': 'tid-height' },
  },
  nested: {
    title: '嵌套',
    renderType: 'Object',
    properties: {
      left: {
        title: '左侧',
        renderType: 'InputNumber',
        renderOptions: { 'data-testid': 'tid-left' },
      },
    },
  },
  extra: {
    title: '额外',
    renderType: 'InputText',
    hidden: '$root.width !== 1',
    renderOptions: { 'data-testid': 'tid-extra' },
  },
})

describe('findItem / resetError / scrollTo（字段级订阅下）', () => {
  test('可以按字符串、数组、嵌套路径找到实例', () => {
    const coreRef = createRef<ICoreRef>()
    render(<CompletedCore ref={coreRef} schema={baseSchema} />)

    expect(coreRef.current?.findItem('width')).toBeDefined()
    expect(coreRef.current?.findItem(['width'])).toBeDefined()
    expect(coreRef.current?.findItem('nested.left')).toBeDefined()
    expect(coreRef.current?.findItem(['nested', 'left'])).toBeDefined()
    expect(coreRef.current?.findItem('not-exist')).toBeUndefined()
  })

  test('findItem().getRootElement() 指向对应字段的 DOM', () => {
    const coreRef = createRef<ICoreRef>()
    const { container } = render(<CompletedCore ref={coreRef} schema={baseSchema} />)

    expect(coreRef.current?.findItem('width')?.getRootElement()).toBe(
      container.querySelector('.cls-width')
    )

    const nestedElement = coreRef.current?.findItem('nested.left')?.getRootElement()
    expect(nestedElement?.querySelector('[data-testid="tid-left"]')).toBeTruthy()
  })

  test('字段隐藏后实例被清理，重新显示后恢复注册', () => {
    const coreRef = createRef<ICoreRef>()
    render(<CompletedCore ref={coreRef} schema={baseSchema} />)

    // 初始 width 为空：hidden 表达式为真，字段隐藏
    expect(coreRef.current?.findItem('extra')).toBeUndefined()

    fireEvent.change(screen.getByTestId('tid-width'), { target: { value: '1' } })
    expect(coreRef.current?.findItem('extra')).toBeDefined()

    fireEvent.change(screen.getByTestId('tid-width'), { target: { value: '2' } })
    expect(coreRef.current?.findItem('extra')).toBeUndefined()
  })

  test('resetError 只清除指定字段的错误', async () => {
    const coreRef = createRef<ICoreRef>()
    render(<CompletedCore ref={coreRef} schema={baseSchema} />)

    await act(async () => {
      await coreRef.current!.validate()
    })

    expect(screen.queryByText('宽度是必填项')).toBeTruthy()
    expect(screen.queryByText('高度是必填项')).toBeTruthy()

    act(() => coreRef.current?.resetError(['width']))

    expect(screen.queryByText('宽度是必填项')).toBeNull()
    expect(screen.queryByText('高度是必填项')).toBeTruthy()
  })

  test('resetError 不传参数时清除全部错误', async () => {
    const coreRef = createRef<ICoreRef>()
    render(<CompletedCore ref={coreRef} schema={baseSchema} />)

    await act(async () => {
      await coreRef.current!.validate()
    })

    act(() => coreRef.current?.resetError())

    expect(screen.queryByText('宽度是必填项')).toBeNull()
    expect(screen.queryByText('高度是必填项')).toBeNull()
  })

  test('scrollTo 支持嵌套路径与参数', () => {
    const scrollTo = jest.fn()
    const origin = Element.prototype.scrollTo
    Element.prototype.scrollTo = scrollTo

    const coreRef = createRef<ICoreRef>()
    render(<CompletedCore ref={coreRef} schema={baseSchema} />)

    coreRef.current?.scrollTo('nested.left')
    expect(scrollTo).toBeCalledWith(
      expect.objectContaining({
        left: expect.any(Number),
        top: expect.any(Number),
        behavior: 'smooth',
      })
    )

    scrollTo.mockClear()
    coreRef.current?.scrollTo('width', { xAxis: false, yAxis: false })
    expect(scrollTo).toBeCalledWith({
      left: undefined,
      top: undefined,
      behavior: 'smooth',
    })

    Element.prototype.scrollTo = origin
  })

  test('隐藏字段不会触发滚动', () => {
    const scrollTo = jest.fn()
    const origin = Element.prototype.scrollTo
    Element.prototype.scrollTo = scrollTo

    const coreRef = createRef<ICoreRef>()
    render(<CompletedCore ref={coreRef} schema={baseSchema} />)

    coreRef.current?.scrollTo('extra')
    expect(scrollTo).not.toBeCalled()

    Element.prototype.scrollTo = origin
  })
})

describe('全表校验', () => {
  test('返回的 errorList 与实际必填状态一致', async () => {
    const coreRef = createRef<ICoreRef>()
    render(<CompletedCore ref={coreRef} schema={baseSchema} />)

    const result = await act(async () => coreRef.current!.validate())

    expect(result.hasError).toBeTruthy()
    expect(result.errorList.map((item) => item.path)).toEqual([['width'], ['height']])
  })

  test('required 表达式引用其它字段：依赖变化后校验结果跟着变', async () => {
    const schema = wrapRootSchema({
      type: {
        title: '类型',
        renderType: 'InputText',
        renderOptions: { 'data-testid': 'tid-type' },
      },
      name: {
        title: '名称',
        renderType: 'InputText',
        required: '$root.type === "A"',
        renderOptions: { 'data-testid': 'tid-name' },
      },
    })

    const coreRef = createRef<ICoreRef>()
    render(<CompletedCore ref={coreRef} schema={schema} />)

    fireEvent.change(screen.getByTestId('tid-type'), { target: { value: 'B' } })
    const noError = await act(async () => coreRef.current!.validate())
    expect(noError.hasError).toBe(false)

    fireEvent.change(screen.getByTestId('tid-type'), { target: { value: 'A' } })
    const hasError = await act(async () => coreRef.current!.validate())
    expect(hasError.hasError).toBe(true)
    expect(hasError.errorList.map((item) => item.path)).toEqual([['name']])
  })

  test('隐藏字段不参与校验，显示后参与', async () => {
    const schema = wrapRootSchema({
      show: {
        title: '显示',
        renderType: 'InputText',
        renderOptions: { 'data-testid': 'tid-show' },
      },
      secret: {
        title: '密文',
        renderType: 'InputText',
        required: true,
        hidden: '$root.show !== "1"',
        renderOptions: { 'data-testid': 'tid-secret' },
      },
    })

    const coreRef = createRef<ICoreRef>()
    render(<CompletedCore ref={coreRef} schema={schema} />)

    const hiddenResult = await act(async () => coreRef.current!.validate())
    expect(hiddenResult.hasError).toBe(false)

    fireEvent.change(screen.getByTestId('tid-show'), { target: { value: '1' } })

    const visibleResult = await act(async () => coreRef.current!.validate())
    expect(visibleResult.errorList.map((item) => item.path)).toEqual([['secret']])
  })

  test('校验使用的是最新值（输入后不再报缺失）', async () => {
    const coreRef = createRef<ICoreRef>()
    render(<CompletedCore ref={coreRef} schema={baseSchema} />)

    fireEvent.change(screen.getByTestId('tid-width'), { target: { value: '800' } })

    const result = await act(async () => coreRef.current!.validate())

    expect(result.errorList.map((item) => item.path)).toEqual([['height']])
  })
})

describe('watch', () => {
  test('顶层字段变化触发对应回调，参数符合预期', () => {
    const onWidthChange = jest.fn()

    render(<CompletedCore schema={baseSchema} watch={{ width: onWidthChange }} />)

    fireEvent.change(screen.getByTestId('tid-width'), { target: { value: '800' } })

    expect(onWidthChange).toBeCalledWith(
      { width: 800 },
      { path: ['width'], sPath: 'width', value: 800 }
    )
  })

  test('嵌套字段变化触发对应回调', () => {
    const onLeftChange = jest.fn()

    render(<CompletedCore schema={baseSchema} watch={{ 'nested.left': onLeftChange }} />)

    fireEvent.change(screen.getByTestId('tid-left'), { target: { value: '800' } })

    expect(onLeftChange).toBeCalledWith(
      { nested: { left: 800 } },
      { path: ['nested', 'left'], sPath: 'nested.left', value: 800 }
    )
  })
})
