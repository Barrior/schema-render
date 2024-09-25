import { REG_COMMA_NUMBER } from '../constants/regexp'
import { isEmpty } from '../utils/common'

interface ICommaNumberProps {
  value?: any
}

const CommaNumber = ({ value }: ICommaNumberProps) => {
  // 排除空数据
  if (isEmpty(value)) {
    return '-'
  }

  // 保证 value 是数字
  if (isNaN(Number(value))) {
    return value
  }

  // 千分位处理
  return String(value).replace(REG_COMMA_NUMBER, ',')
}

export default CommaNumber
