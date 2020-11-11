import React from 'react'
import { View } from 'react-native'
import { render, cleanup } from '@testing-library/react-native'
import Iconmoon, { iconList } from './index'
import type { IconMoonProps } from './index'
import iconSetExample from './example.json'

jest.mock('react-native-svg', () => {
  const reactNativeSvg = jest.genMockFromModule('react-native-svg')
  return reactNativeSvg
})

const IconMock = (props: IconMoonProps) => (
  <View testID="icon">
    <Iconmoon {...props} />
  </View>
)

beforeEach(cleanup)

test('icon is accepting props', () => {
  const { getByTestId } = render(
    <IconMock
      iconSet={iconSetExample}
      name="firefox"
      size={25}
      color="tomato"
    />
  )

  const svgIcon = getByTestId('icon').props.children

  expect(svgIcon.props.name).toBe('firefox')
  expect(svgIcon.props.size).toBe(25)
  expect(svgIcon.props.color).toBe('tomato')
  expect(JSON.stringify(svgIcon.props.iconSet)).toMatch(
    JSON.stringify(iconSetExample)
  )
})

test('icon throw error for insufficent props', () => {
  const spyConsoleError = jest
    .spyOn(console, 'error')
    .mockImplementation(() => {})

  //@ts-ignore
  render(<IconMock />)

  expect(spyConsoleError).toHaveBeenCalled()
})

test('iconList function', () => {
  const result = iconList(iconSetExample)
  expect(result).toEqual(['chrome', 'firefox', 'IE', 'edge', 'safari', 'opera'])
})
