import useDevTool from '@core-react/hooks/useDevTool'
import { renderHook } from '@testing-library/react'
import { useRef } from 'react'

describe('useDevTool 验证', () => {
  test('exportValue 导出数据应该符合预期', () => {
    const value = { title: '标题' }
    const { result } = renderHook(() => {
      const valueRef = useRef(value)
      return useDevTool({ valueRef } as never)
    })
    const tool = window.__schema_render_tool__[result.current.uid]
    expect(tool.exportValue?.()).toEqual(value)
  })
})
