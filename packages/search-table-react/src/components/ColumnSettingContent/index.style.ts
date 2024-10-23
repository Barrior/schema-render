import { cij } from '@schema-render/form-render-react'

export const header = cij`
  display: flex;
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;
  background: #fafafa;
  border-radius: 8px 8px 0 0;
  font-weight: bold;
`

export const list = cij`
  max-height: calc(100vh - 260px);
  overflow: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #999;
  }
`

export const rowWrapper = cij`
  border-top: 1px solid #f0f0f0;

  &:first-of-type {
    border-top: none;
  }
`

export const rowWrapperOverlay = cij`
  background-color: #fff;
  transform: scale(1.05);
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  transition: 200ms ease-out;
`

export const row = cij`
  display: flex;
  padding: 8px 0;
  background-color: #fff;

  &:hover {
    background-color: #fafafa;
  }
`

export const col = cij`
  flex-grow: 1;
  display: flex;
  align-items: center;
  padding: 0 12px;
  word-break: break-all;
  flex-shrink: 0;
`

export const footer = cij`
  text-align: right;
  padding-top: 12px;
  border-top: 1px solid #f0f0f0;
`
