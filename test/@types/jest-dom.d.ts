// 引入 jest-dom 的 matcher 类型增强（toHaveValue / toHaveTextContent / toBeInTheDocument 等）。
// 真实运行由 test/@helpers/jest-setup.ts 负责；这里只解决「只检查暂存文件」时的类型加载。
import '@testing-library/jest-dom'
