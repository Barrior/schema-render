import './styles.less'

import type { CSSProperties } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
// @ts-ignore
import { stackoverflowLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'

interface IProps {
  value: object | string
  language?: string
  style?: CSSProperties
}

const ESyntaxHighlighter: React.FC<IProps> = ({ value, language = 'json', style }) => {
  return (
    <div style={style}>
      <SyntaxHighlighter
        className="example-hl"
        language={language}
        style={stackoverflowLight}
      >
        {language === 'json' ? JSON.stringify(value, null, 2) : (value as string)}
      </SyntaxHighlighter>
    </div>
  )
}

export default ESyntaxHighlighter
