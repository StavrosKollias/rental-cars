import React from 'react'
import { App } from './'
import * as utils from '../../test_utils/utils'
import { Labels } from '../../constants/Labels'

beforeEach(() => {
  utils.setSearchContext({
    getLocationsList: jest.fn(),
    locationsList: [],
    selectedPickUpLocation: '',
    setSelectedPickUpLocation: jest.fn(),
    selectedDropOffLocation: '',
    setSelectedDropOffLocation: jest.fn(),
    content: Labels,
  })
})

describe('App testing', () => {
  test('Component Renders with no error', () => {
    const { getByTestId } = utils.renderComponent(<App />)
    const app = getByTestId('app')
    expect(app).not.toBeNull()
  })
})
