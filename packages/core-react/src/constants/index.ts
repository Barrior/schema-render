/**
 * 校验状态枚举值
 */
export enum EValidationStatus {
  success = 'success',
  warning = 'warning',
  error = 'error',
}

export type IValidationStatus = keyof typeof EValidationStatus

export const VALID_VALIDATION_STATUS = [
  EValidationStatus.success,
  EValidationStatus.warning,
  EValidationStatus.error,
]

/**
 * 整体表单布局枚举值
 */
export enum ELayout {
  normal = 'normal',
  autoFill = 'autoFill',
  autoFit = 'autoFit',
}

export type ILayout = keyof typeof ELayout
