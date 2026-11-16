import type { IPath, IRenderers } from '@core-react/index'
import { wrapRootSchema } from '@test/@helpers/schema'
import { fireEvent, render, screen } from '@testing-library/react'

import CompletedCore from './@helpers/CompletedCore'

const capturedPaths: IPath[] = []

const renderers = {
  CaptureInput: {
    component: ({ path, value, onChange, schema }: any) => {
      capturedPaths.push(path)

      return (
        <input
          data-testid={schema.renderOptions?.['data-testid']}
          value={value ?? ''}
          onChange={(e) => onChange(e.target.value)}
        />
      )
    },
  },
} as unknown as IRenderers

const schema = wrapRootSchema({
  name: {
    title: '名称',
    renderType: 'CaptureInput',
    renderOptions: {
      'data-testid': 'tid-name',
    },
  },
  nested: {
    title: '嵌套',
    renderType: 'Object',
    properties: {
      left: {
        title: '左侧',
        renderType: 'CaptureInput',
        renderOptions: {
          'data-testid': 'tid-left',
        },
      },
    },
  },
})

describe('path 引用稳定性', () => {
  beforeEach(() => {
    capturedPaths.length = 0
  })

  test('自身值变化导致重渲染时，同一字段拿到的 path 是同一个数组', () => {
    render(<CompletedCore schema={schema} renderers={renderers} />)

    fireEvent.change(screen.getByTestId('tid-name'), { target: { value: '1' } })
    fireEvent.change(screen.getByTestId('tid-name'), { target: { value: '12' } })

    const namePaths = capturedPaths.filter((path) => path[0] === 'name')

    expect(namePaths.length).toBeGreaterThanOrEqual(3)
    expect(namePaths.every((path) => path === namePaths[0])).toBe(true)
    expect(namePaths[0]).toEqual(['name'])
  })

  test('嵌套对象里的字段，path 同样稳定', () => {
    render(<CompletedCore schema={schema} renderers={renderers} />)

    fireEvent.change(screen.getByTestId('tid-left'), { target: { value: '1' } })
    fireEvent.change(screen.getByTestId('tid-left'), { target: { value: '12' } })

    const leftPaths = capturedPaths.filter((path) => path[0] === 'nested')

    expect(leftPaths.length).toBeGreaterThanOrEqual(3)
    expect(leftPaths.every((path) => path === leftPaths[0])).toBe(true)
    expect(leftPaths[0]).toEqual(['nested', 'left'])
  })
})
