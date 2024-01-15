import '@testing-library/jest-dom'

import React from 'react'

// Define global React to solve "ReferenceError: React is not defined in jest tests"
// https://stackoverflow.com/questions/58980934/referenceerror-react-is-not-defined-in-jest-tests
global.React = React

// 不打印 console 错误信息
jest.spyOn(console, 'error').mockImplementation(jest.fn())
