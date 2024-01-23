import type { ICoreRef } from '@core-react/index'
import { wrapRootSchema } from '@test/@helpers/schema'
import { render } from '@testing-library/react'
import { createRef } from 'react'

import CompletedCore from './@helpers/CompletedCore'

const schema = wrapRootSchema({
  width: {
    title: '宽度',
    renderType: 'InputNumber',
    className: 'cls-width',
    required: true,
  },
  height: {
    title: '高度',
    renderType: 'InputNumber',
    className: 'cls-height',
  },
  remark: {
    title: '备注',
    renderType: 'InputTextWithWarning',
    className: 'cls-remark',
  },
})

describe('validate 验证', () => {
  test('执行结果应该符合预期', async () => {
    const coreRef = createRef<ICoreRef>()
    render(<CompletedCore ref={coreRef} schema={schema} />)
    const { hasError, hasWarning, errorList, warningList } =
      await coreRef.current!.validate()

    expect(hasError).toBeTruthy()
    expect(hasWarning).toBeTruthy()
    expect(errorList).toEqual([
      {
        path: ['width'],
        value: undefined,
        status: 'error',
        message: '宽度是必填项',
        extra: undefined,
      },
    ])
    expect(warningList).toEqual([
      {
        path: ['remark'],
        value: undefined,
        status: 'warning',
        message: 'warning-message-from-InputTextWithWarning',
        extra: undefined,
      },
    ])
  })
})

/**
 * 待优化测试用例，由于测试框架无法重新渲染，难以测试
 */
describe('resetError 验证', () => {
  test('触发次数应该符合预期', async () => {
    let hitCount = 0
    const Vertical = () => {
      hitCount++
      return <div className="item-layout-vertical"></div>
    }

    const coreRef = createRef<ICoreRef>()
    render(<CompletedCore ref={coreRef} schema={schema} itemLayout={Vertical} />)
    await coreRef.current!.validate()

    // 重置指定项错误
    coreRef.current?.resetError(['width'])

    // 重置全部错误
    coreRef.current?.resetError()
    expect(hitCount).toBe(3)
  })
})

describe('setValue 验证', () => {
  test('setValue 后应该触发 onChange 回调，onChange 回调值应该符合预期', async () => {
    const onChange = jest.fn()
    const coreRef = createRef<ICoreRef>()
    render(<CompletedCore ref={coreRef} schema={schema} onChange={onChange} />)

    coreRef.current?.setValue({ width: 800 })
    expect(onChange).toBeCalledWith(
      { width: 800 },
      { path: [], sPath: '', value: undefined }
    )
  })
})

describe('getValue 验证', () => {
  test('返回值应该符合预期', async () => {
    const coreRef = createRef<ICoreRef>()
    render(<CompletedCore ref={coreRef} schema={schema} />)

    // 初始值应该正确
    expect(coreRef.current?.getValue()).toEqual({})

    // 变更后的值应该正确
    coreRef.current?.setValue({ width: 800 })
    expect(coreRef.current?.getValue()).toEqual({ width: 800 })
  })
})

describe('resetValue 验证', () => {
  test('重置表单值后，getValue 得到的值应该是空对象', async () => {
    const coreRef = createRef<ICoreRef>()
    render(<CompletedCore ref={coreRef} schema={schema} />)

    coreRef.current?.setValue({ width: 800 })
    expect(coreRef.current?.getValue()).toEqual({ width: 800 })

    coreRef.current?.resetValue()
    expect(coreRef.current?.getValue()).toEqual({})
  })
})

describe('getRootElement 验证', () => {
  test('获取的根节点应该正确，通过声明的类名判断', async () => {
    const coreRef = createRef<ICoreRef>()
    render(<CompletedCore className="the-root-elem" ref={coreRef} schema={schema} />)

    const rootElem = coreRef.current?.getRootElement()
    expect(rootElem?.classList.contains('the-root-elem')).toBeTruthy()
  })
})

describe('findItem 验证', () => {
  test('通过 findItem 获取的表单项实例应该存在', async () => {
    const coreRef = createRef<ICoreRef>()
    render(<CompletedCore ref={coreRef} schema={schema} />)

    const formItemInstance = coreRef.current?.findItem('width')
    expect(formItemInstance).toBeDefined()
  })

  test('数组参数也应该支持', async () => {
    const coreRef = createRef<ICoreRef>()
    render(<CompletedCore ref={coreRef} schema={schema} />)

    const formItemInstance = coreRef.current?.findItem(['width'])
    expect(formItemInstance).toBeDefined()
  })

  test('通过 findItem.getRootElement 获取的表单项根节点元素应该正确', async () => {
    const coreRef = createRef<ICoreRef>()
    const { container } = render(<CompletedCore ref={coreRef} schema={schema} />)

    const formItemRootElement = coreRef.current?.findItem('width')?.getRootElement()
    expect(formItemRootElement).toBe(container.querySelector('.cls-width'))
  })
})

describe('scrollTo 验证', () => {
  test('滚动函数应该被调用，且参数正确', () => {
    const mockScrollTo = jest.fn()
    Element.prototype.scrollTo = mockScrollTo

    const coreRef = createRef<ICoreRef>()
    render(<CompletedCore ref={coreRef} schema={schema} />)

    // 无参数滚动
    coreRef.current?.scrollTo('width')
    expect(mockScrollTo).toBeCalledWith(
      expect.objectContaining({
        left: expect.any(Number),
        top: expect.any(Number),
        behavior: 'smooth',
      })
    )

    // 带参数滚动
    coreRef.current?.scrollTo('height', {
      xAxis: false,
      yAxis: false,
      behavior: 'instant',
    })
    expect(mockScrollTo).toBeCalledWith({
      left: undefined,
      top: undefined,
      behavior: 'instant',
    })
  })

  test('不存在的表单项路径，不应该调用滚动函数', () => {
    const mockScrollTo = jest.fn()
    Element.prototype.scrollTo = mockScrollTo

    const coreRef = createRef<ICoreRef>()
    render(<CompletedCore ref={coreRef} schema={schema} />)

    coreRef.current?.scrollTo('no-width')
    expect(mockScrollTo).not.toBeCalled()
  })
})
