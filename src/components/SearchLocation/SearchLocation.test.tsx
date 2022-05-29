import React from 'react'
import { SearchLocation } from './'
import * as utils from '../../test_utils/utils'
import { Labels } from '../../constants/Labels'

const mockSetSelectedLocation = jest.fn()

const SearchLocationProps = {
  selectedLocation: '',
  setSelectedLocation: mockSetSelectedLocation,
  content: Labels.inputPickUpLocation,
}

// beforeEach(() => {
//   utils.setSearchContext({
//     getLocationsList: jest.fn(),
//     locationsList: [],
//     selectedLocation: '',
//     setSelectedLocation: mockSetSelectedLocation,
//     content: Labels,
//   })
// })

describe('SearchLocation', () => {
  test('Component renders with no errors', () => {
    const { getByTestId } = utils.render(<SearchLocation {...SearchLocationProps} />)
    const searchLocationContainer = getByTestId('search-location')
    expect(searchLocationContainer).not.toBeNull()
  })

  test('Component renders with input and label', () => {
    const { getByTestId } = utils.render(<SearchLocation {...SearchLocationProps} />)
    const input = getByTestId('search-input')
    expect(input).not.toBeNull()
    const label = getByTestId('input-label')
    expect(label).not.toBeNull()
  })

  test('Component renders with a search Icon', () => {
    const { getByTestId } = utils.render(<SearchLocation {...SearchLocationProps} />)
    const searchIconContainer = getByTestId('search-icon-container')
    expect(searchIconContainer).not.toBeNull()
    expect(searchIconContainer.children.length).toBe(1)
  })

  test('Input onchange fires event', () => {
    const { getByTestId } = utils.render(<SearchLocation {...SearchLocationProps} />)
    const input = getByTestId('search-input') as HTMLInputElement
    expect(input.value).toBe('')
    utils.fireEvent.change(input, { target: { value: 'Manchester' } })
    expect(mockSetSelectedLocation).toHaveBeenCalledTimes(1)
  })
})
