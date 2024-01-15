import ErrorBoundary from '@core-react/components/ErrorBoundary'
import { render, screen } from '@testing-library/react'

const ERROR_TEXT = '_ERROR_FROM_COMPONENT_'

const ErrorComponent = () => {
  throw new Error(ERROR_TEXT)
}

describe('ErrorBoundary 验证', () => {
  test('组件抛出错误应该被捕获并展示出来', async () => {
    render(
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>
    )
    const node = screen.queryByText(new RegExp(ERROR_TEXT))
    expect(node).toBeInTheDocument()
  })

  test('设置为 silent 模式时，组件错误不应该展示出来', async () => {
    render(
      <ErrorBoundary catchErrorTips="silent">
        <ErrorComponent />
      </ErrorBoundary>
    )
    const node = screen.queryByText(new RegExp(ERROR_TEXT))
    expect(node).not.toBeInTheDocument()
  })

  test('自定义错误时，应该捕获错误并展示自定义的错误信息', async () => {
    const CUSTOM_ERROR_TEXT = 'CUSTOM_ERROR_TIPS'
    render(
      <ErrorBoundary catchErrorTips={() => CUSTOM_ERROR_TEXT}>
        <ErrorComponent />
      </ErrorBoundary>
    )
    const node = screen.queryByText(new RegExp(CUSTOM_ERROR_TEXT))
    expect(node).toBeInTheDocument()
  })
})
