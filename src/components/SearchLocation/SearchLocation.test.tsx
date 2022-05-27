import React from 'react'
import { SearchLocation } from './'
import * as utils from '../../test_utils/utils'
import { Labels } from '../../constants/Labels'

const mockSetSelectedLocation = jest.fn()
beforeEach(() => {
  utils.setSearchContext({
    getLocationsList: jest.fn(),
    locationsList: [],
    selectedLocation: '',
    setSelectedLocation: mockSetSelectedLocation,
    content: Labels,
  })
})

describe('SearchLocation', () => {
  test('Component renders with no errors', () => {
    const { getByTestId } = utils.renderComponent(<SearchLocation />)
    const searchLocationContainer = getByTestId('search-location')
    expect(searchLocationContainer).not.toBeNull()
  })

  test('Component renders with input and label', () => {
    const { getByTestId } = utils.renderComponent(<SearchLocation />)
    const input = getByTestId('search-input')
    expect(input).not.toBeNull()
    const label = getByTestId('input-label')
    expect(label).not.toBeNull()
  })

  test('input onchange fires event', async () => {
    const { getByTestId } = utils.renderComponent(<SearchLocation />)
    const input = getByTestId('search-input') as HTMLInputElement
    expect(input.value).toBe('')
    await utils.fireEvent.change(input, { target: { value: 'Manchester' } })
    expect(mockSetSelectedLocation).toHaveBeenCalledTimes(1)
  })
})
