import React from 'react'
import { SearchBar } from './'
import * as utils from '../../test_utils/utils'
import { Labels } from '../../constants/Labels'
import debounce from 'lodash.debounce'
import * as sinon from 'sinon'

let debouceClock

const mockSetSelectedPickUpLocation = jest.fn()
const mockSetSelectedDropOffLocation = jest.fn()
const mockSetSelectedPickUpTime = jest.fn()
const mockSetSelectedDropOffTime = jest.fn()
const mockSetDropOffLocationFlag = jest.fn()
const mockSetSelectedPickUpDate = jest.fn()
const mockSetSelectedDropOffDate = jest.fn()
const mockSetPickUpListState = jest.fn()
const mockSetDropOffListState = jest.fn()
const mockDebounce = jest.fn()

describe('SearchBar', () => {
  beforeEach(() => {
    debouceClock = sinon.useFakeTimers()
    debounce(mockDebounce, 300)
    utils.setSearchContext({
      locationsList: [],
      selectedPickUpLocation: '',
      setSelectedPickUpLocation: mockSetSelectedPickUpLocation,
      selectedDropOffLocation: '',
      setSelectedDropOffLocation: mockSetSelectedDropOffLocation,
      pickUpListState: false,
      setPickUpListState: mockSetPickUpListState,
      dropOffListState: false,
      setDropOffListState: mockSetDropOffListState,

      selectedPickUpTime: '',
      setSelectedPickUpTime: mockSetSelectedPickUpTime,
      selectedDropOffTime: '',
      setSelectedDropOffTime: mockSetSelectedDropOffTime,
      dropOffLocationFlag: false,
      setDropOffLocationFlag: mockSetDropOffLocationFlag,
      selectedPickUpDate: '31/05/2022',
      setSelectedPickUpDate: mockSetSelectedPickUpDate,
      selectedDropOffDate: '31/05/2022',
      setSelectedDropOffDate: mockSetSelectedDropOffDate,
      debouncedGetLocations: mockDebounce,
      content: Labels,
    })
  })

  afterEach(() => {
    debouceClock.restore()
  })

  test('Component renders with no error', () => {
    const { getByTestId } = utils.renderComponent(<SearchBar />)
    const searchBar = getByTestId('search-bar-component')
    expect(searchBar).not.toBeNull()
  })

  test('Component renders with one search location pickup input and fires setLocation on change', () => {
    const { getAllByTestId, getByLabelText } = utils.renderComponent(<SearchBar />)
    const searchLocations = getAllByTestId('search-location')
    expect(searchLocations.length).toBe(1)
    const input = getByLabelText('Pick-up Location')
    utils.fireEvent.change(input, { target: { value: 'Manchester' } })
    expect(mockSetSelectedPickUpLocation).toHaveBeenCalledTimes(1)
  })

  test('Component renders with two search location pickup input and fires setLocation on change', () => {
    utils.setSearchContext({ dropOffLocationFlag: true })
    const { getAllByTestId, getByLabelText } = utils.renderComponent(<SearchBar />)
    const searchLocations = getAllByTestId('search-location')
    expect(searchLocations.length).toBe(2)
    const input = getByLabelText('Drop-off Location')
    utils.fireEvent.change(input, { target: { value: 'Manchester' } })
    expect(mockSetSelectedDropOffLocation).toHaveBeenCalledTimes(1)
  })

  test('component renders with two date pickers and fires the events on change', () => {
    const { getAllByTestId, getByLabelText } = utils.renderComponent(<SearchBar />)
    const datePickers = getAllByTestId('date-picker')
    expect(datePickers.length).toBe(2)
    const inputPickUp = getByLabelText('Pick-up Date')
    utils.fireEvent.change(inputPickUp, { target: { value: '01/07/2022' } })
    expect(mockSetSelectedPickUpDate).toHaveBeenCalledTimes(1)
    const inputDropOff = getByLabelText('Drop-off Date')
    utils.fireEvent.change(inputDropOff, { target: { value: '11/07/2022' } })
    expect(mockSetSelectedDropOffDate).toHaveBeenCalledTimes(1)
  })

  test('component renders with two time selects and fires the events on change', () => {
    const { getAllByTestId, getByLabelText } = utils.renderComponent(<SearchBar />)
    const timeSelects = getAllByTestId('time-select-container')
    expect(timeSelects.length).toBe(2)
    const selectPickUp = getByLabelText('Pick-up Time')
    utils.fireEvent.change(selectPickUp, { target: { value: '10:00' } })
    expect(mockSetSelectedPickUpTime).toHaveBeenCalledTimes(1)
    const selectDropOff = getByLabelText('Drop-off Time')
    utils.fireEvent.change(selectDropOff, { target: { value: '23:30' } })
    expect(mockSetSelectedDropOffTime).toHaveBeenCalledTimes(1)
  })

  test('Component renders with a button', () => {
    const { getByTestId, getByLabelText } = utils.renderComponent(<SearchBar />)
    const submitButton = getByTestId('button-component')
    expect(submitButton).not.toBeNull()
    expect(submitButton.textContent).toBe('Search')
  })
})
