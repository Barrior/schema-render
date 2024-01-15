import logger from '@core-react/utils/logger'

describe('logger 验证', () => {
  test('warn 方法调用后输出结果应该一致', () => {
    const spy = jest.spyOn(console, 'warn').mockImplementation(jest.fn())
    logger.warn('警告')
    expect(spy).toHaveBeenCalledWith('警告')
  })
})
