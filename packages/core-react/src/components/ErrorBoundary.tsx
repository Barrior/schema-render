import type { PropsWithChildren } from 'react'
import { Component } from 'react'

import type { ICore } from '../typings/core'
import { isFunction } from '../utils/checking'

interface IErrorBoundaryState {
  hasError: boolean
  error: Error
}

interface IErrorBoundaryProps {
  catchErrorTips?: ICore['catchErrorTips']
}

export default class ErrorBoundary extends Component<
  PropsWithChildren<IErrorBoundaryProps>,
  IErrorBoundaryState
> {
  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      error,
    }
  }

  state = {
    hasError: false,
    error: Error(),
  }

  getFallback() {
    const { error } = this.state
    const { catchErrorTips } = this.props

    if (catchErrorTips === 'silent') {
      return null
    }

    if (isFunction(catchErrorTips)) {
      return catchErrorTips(error)
    }

    return (
      <div style={{ color: 'red' }}>[ErrorBoundary] {error?.stack ?? String(error)}</div>
    )
  }

  render() {
    if (this.state.hasError) {
      return this.getFallback()
    }
    return this.props.children
  }
}
