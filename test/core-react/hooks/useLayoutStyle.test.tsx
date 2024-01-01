import useLayoutStyle, { LAYOUT_MIN_MAX } from '@core-react/hooks/useLayoutStyle'
import { renderHook } from '@testing-library/react'

describe('useLayoutStyle 验证', () => {
  test('layout 模式为 normal 时，应该返回 24 栅格布局值', () => {
    const { result } = renderHook(() => useLayoutStyle({ layout: 'normal' }))
    expect(result.current.gridTemplateColumns).toEqual('repeat(24, 1fr)')
  })

  test('layout 模式为 autoFill 时，没有设置最小最大值则返回默认值', () => {
    const { result } = renderHook(() => useLayoutStyle({ layout: 'autoFill' }))
    expect(result.current.gridTemplateColumns).toEqual(
      `repeat(auto-fill, minmax(${LAYOUT_MIN_MAX[0]}, ${LAYOUT_MIN_MAX[1]}))`
    )
  })

  test('layout 模式为 autoFill 时，设置最小最大值则返回设置的值', () => {
    const { result } = renderHook(() =>
      useLayoutStyle({
        layout: 'autoFill',
        layoutMinMax: ['100px', '200px'],
      })
    )
    expect(result.current.gridTemplateColumns).toEqual(
      'repeat(auto-fill, minmax(100px, 200px))'
    )
  })

  test('layout 模式为 autoFill 时，数字类型最小最大值应该正确', () => {
    const { result } = renderHook(() =>
      useLayoutStyle({
        layout: 'autoFill',
        layoutMinMax: [100, 200],
      })
    )
    expect(result.current.gridTemplateColumns).toEqual(
      'repeat(auto-fill, minmax(100px, 200px))'
    )
  })

  test('layout 模式为 autoFit 时，应该返回设置的最小最大值', () => {
    const { result } = renderHook(() =>
      useLayoutStyle({
        layout: 'autoFit',
        layoutMinMax: [100, 200],
      })
    )
    expect(result.current.gridTemplateColumns).toEqual(
      'repeat(auto-fit, minmax(100px, 200px))'
    )
  })
})
