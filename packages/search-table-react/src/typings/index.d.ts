import type { IObjectAny, IPartRequired } from '@schema-render/core-react'
import type { ISearchProps, ISearchRef } from '@schema-render/search-react'
import type { TabsProps } from 'antd'
import type { CSSProperties, MutableRefObject, ReactNode } from 'react'

import type { ITableOnChangeParams, ITableProps } from './table.d'

/**
 * 全局数据
 */
export interface IGlobalState {
  /**
   * 标签页是否在切换中，切换时不同步 rawColumns
   */
  isTabChanging: boolean
}

export type IGlobalStateRef = MutableRefObject<IGlobalState>

export interface IRenderParams {
  /**
   * 是否加载中
   */
  loading: boolean
}

export interface IPagination {
  /**
   * 当前页码
   */
  current: number
  /**
   * 每页个数
   */
  pageSize: number
}

export interface IRequestResult {
  /**
   * 表格数据源
   */
  data?: IObjectAny[]
  /**
   * 分页总数
   */
  total?: number
  /**
   * 合计栏数据
   */
  summaryData?: IObjectAny
  /**
   * 其他数据
   */
  [key: string]: any
}

export interface IRequestExtraParams {
  sorter?: ITableOnChangeParams[2]
  filter?: ITableOnChangeParams[1]
}

export interface ISearchTableProps<S extends IObjectAny = IObjectAny> {
  /**
   * 根节点类名
   */
  className?: string
  /**
   * 根节点样式
   */
  style?: CSSProperties
  /**
   * 表格数据接口请求
   */
  request?: (
    params: Partial<S & IPagination>,
    extraParams: IRequestExtraParams
  ) => Promise<IRequestResult>
  /**
   * 主要加载完成，是否立即发一次请求
   */
  requestOnMounted?: boolean
  /**
   * 顶部栏
   */
  header?: (p: IRenderParams) => ReactNode
  /**
   * 搜索栏
   */
  search: ISearchProps | false
  /**
   * 标题栏顶部区域
   */
  titleTop?: (p: IRenderParams) => ReactNode
  /**
   * 标题栏
   */
  title?: {
    /**
     * 标题栏类名
     */
    className?: string
    /**
     * 标题栏样式
     */
    style?: CSSProperties
    /**
     * 标签页
     */
    tabs?: TabsProps
    /**
     * 是否展示“列配置”功能
     */
    showSetting?: boolean
  }
  /**
   * 标题栏底部区域
   */
  titleBottom?: (p: IRenderParams) => ReactNode
  /**
   * 表格栏
   */
  table: ITableProps
  /**
   * 底部栏
   */
  footer?: (p: IRenderParams) => ReactNode
}

export interface IComOptions {
  /**
   * 是否覆盖，默认为false，即合并已有参数
   */
  overwrite?: boolean
}

/**
 * 刷新参数，用于给请求接口
 */
export type IRequestParams = Partial<IObjectAny & IPagination>

/**
 * 刷新选项，控制刷新行为
 */
export type IRequestOptions = IComOptions

export interface ISearchTableRef {
  /**
   * 刷新表格数据（重新获取数据）
   * @param params 请求参数
   * @param options 操作行为控制
   */
  refresh: (
    params?: IRequestParams,
    options?: IRequestOptions
  ) => Promise<IPartRequired<IRequestResult, 'data' | 'total'>>
  /**
   * 获取根节点元素
   */
  getRootElement: () => HTMLElement | null
  /**
   * 获取搜索栏实例
   */
  getSearchRef: () => ISearchRef | null
  /**
   * 获取表格列表数据
   */
  getDataSource: () => IRequestResult['data']
  /**
   * 设置表格列表数据
   */
  setDataSource: (dataSource: IObjectAny[]) => void
  /**
   * 设置合计栏数据
   */
  setSummaryData: (data: IObjectAny) => void
  /**
   * 获取搜索参数
   */
  getSearchValue: () => IObjectAny
  /**
   * 设置搜索数据
   * @param value 搜索参数
   * @param options 操作行为控制
   */
  setSearchValue: (value: IObjectAny, options?: IComOptions) => void
  /**
   * 清除搜索数据
   */
  clearSearchValue: () => void
  /**
   * 获取请求的参数，“导出”时常用
   */
  getRequestParams: () => IObjectAny
  /**
   * 获取请求额外参数，如排序参数等
   */
  getRequestExtraParams: () => IRequestExtraParams
  /**
   * 更新表格高度以达到“一屏显示”效果
   * @param delay 延迟计算时间
   * @param checkEnabled 检查 autoScrollY 属性是否开启
   */
  updateScrollY: (delay?: number, checkEnabled?: boolean) => void
  /**
   * 打开列配置弹窗
   */
  openSortModal: () => void
  /**
   * 重新渲染
   */
  rerender: () => void
}
