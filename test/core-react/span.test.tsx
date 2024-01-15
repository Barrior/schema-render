import Core from '@core-react/index'
import { getElementStyle } from '@test/@helpers/dom'
import { wrapRootSchema } from '@test/@helpers/schema'
import { render } from '@testing-library/react'

import renderers from './@helpers/renderers'
import Vertical from './@helpers/Vertical'

describe('schema span 模式验证', () => {
  test('normal 模式下支持 span 与 spanStart，输出的 gridColumn 样式值应该符合预期', async () => {
    const schema = wrapRootSchema({
      width: {
        title: '宽度',
        renderType: 'InputNumber',
        className: 'width',
        // 通过 span 设置表单项为 50% 的宽度（12/24）
        span: 12,
      },
      height: {
        title: '高度',
        renderType: 'InputNumber',
        className: 'height',
        span: 12,
      },
      left: {
        title: '水平位置',
        renderType: 'InputNumber',
        className: 'left',
        // 通过 span 设置表单项为 50% 的宽度
        span: 12,
        // 通过 spanStart 设置表单项从第一个栅格开始布局，即新起一行
        spanStart: 1,
      },
      // 后面的表单项会自动计算，跟随上一个表单项的位置
      top: {
        title: '垂直位置',
        renderType: 'InputNumber',
        className: 'top',
        span: 12,
      },
      // 当 span 和 spanStart 都未定义时，自动恢复常规模式（占满一行）
      rotate: {
        title: '旋转角度',
        renderType: 'InputNumber',
        className: 'rotate',
      },
    })

    const { container } = render(
      <Core layout="normal" schema={schema} itemLayout={Vertical} renderers={renderers} />
    )

    const getGridColumn = (selector: string) => {
      return getElementStyle(container, selector).gridColumn || ''
    }

    expect(getGridColumn('.width')).toBe('1/13')
    expect(getGridColumn('.height')).toBe('13/25')
    expect(getGridColumn('.left')).toBe('1/13')
    expect(getGridColumn('.top')).toBe('13/25')
    expect(getGridColumn('.rotate')).toBe('1/25')
  })

  test('autoFill 模式下只支持 spanStart，输出的 gridColumn 样式值应该符合预期', async () => {
    const schema = wrapRootSchema({
      width: {
        title: '宽度',
        renderType: 'InputNumber',
        className: 'width',
      },
      height: {
        title: '高度',
        renderType: 'InputNumber',
        className: 'height',
      },
      left: {
        title: '水平位置',
        renderType: 'InputNumber',
        className: 'left',
        spanStart: 1,
      },
      top: {
        title: '垂直位置',
        renderType: 'InputNumber',
        className: 'top',
      },
    })

    const { container } = render(
      <Core
        layout="autoFill"
        schema={schema}
        itemLayout={Vertical}
        renderers={renderers}
      />
    )

    const getGridColumn = (selector: string) => {
      return getElementStyle(container, selector).gridColumn || ''
    }

    expect(getGridColumn('.width')).toBe('')
    expect(getGridColumn('.height')).toBe('')
    expect(getGridColumn('.left')).toBe('1/auto')
    expect(getGridColumn('.top')).toBe('')
  })
})
