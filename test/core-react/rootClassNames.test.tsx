import { wrapRootSchema } from '@test/@helpers/schema'
import { render } from '@testing-library/react'

import CompletedCore from './@helpers/CompletedCore'

describe('根节点类名验证', () => {
  const schema = wrapRootSchema()

  test('设置类名前缀为 my-sr, 根节点应该包含该类名', async () => {
    const { container } = render(<CompletedCore prefixCls="my-sr" schema={schema} />)
    const rootElem = container.querySelector('.my-sr')
    expect(rootElem).toBeInTheDocument()
  })

  test('设置类名为 my-class, 根节点应该包含该类名', async () => {
    const { container } = render(<CompletedCore className="my-class" schema={schema} />)
    const rootElem = container.querySelector('.my-class')
    expect(rootElem).toBeInTheDocument()
  })

  test('禁用时, 根节点应该包含该 is-disabled 类名', async () => {
    const { container } = render(<CompletedCore disabled schema={schema} />)
    const rootElem = container.querySelector('.is-disabled')
    expect(rootElem).toBeInTheDocument()
  })

  test('只读时, 根节点应该包含该 is-readonly 类名', async () => {
    const { container } = render(<CompletedCore readonly schema={schema} />)
    const rootElem = container.querySelector('.is-readonly')
    expect(rootElem).toBeInTheDocument()
  })

  test('各类状态下，类名应该都包含', async () => {
    const { container } = render(
      <CompletedCore
        disabled
        readonly
        prefixCls="my-sr"
        className="my-class"
        schema={schema}
      />
    )

    const rootElem = container.querySelector('.my-class')
    expect(rootElem).toBeInTheDocument()

    const list = ['my-sr', 'my-class', 'is-disabled', 'is-readonly']
    list.forEach((className) => {
      expect(rootElem?.classList.contains(className)).toBeTruthy()
    })
  })
})
