import React from 'react'
import { SearchLocation } from './'
import * as utils from '../../test_utils/utils'
import { Labels } from '../../constants/Labels'
import { ILocationItem } from '../../contexts/SearchContext'

const mockSetSelectedLocation = jest.fn()
const mockSetListState = jest.fn()
const mockHanldleLocationSearch = jest.fn()
const locationListprops: Array<ILocationItem> = [
  {
    placeType: 'A',
    placeKey: '1472186',
    locationId: '38111',
    name: 'London Stansted Airport',
    iata: 'STN',
    city: 'London',
    region: 'Greater London',
    country: 'United Kingdom',
    countryIso: 'gb',
    ufi: 900038566,
    bookingId: 'airport-38111',
    lat: 51.889400482177734,
    lng: 0.2615149915218353,
    alternative: ['GB,UK,England,Stansted'],
    searchType: 'L',
    lang: 'en',
    index: 1,
    isPopular: true,
  },
  {
    placeType: 'C',
    placeKey: '438526',
    locationId: '20601',
    name: 'Glasgow',
    region: 'Strathclyde',
    country: 'United Kingdom',
    countryIso: 'gb',
    ufi: -2597039,
    bookingId: 'city-2619646',
    lat: 55.865501403808594,
    lng: -4.2571001052856445,
    alternative: ['GB,UK,Scotland,Glasgow & The Clyde Valley'],
    searchType: 'L',
    lang: 'en',
    index: 2,
    isPopular: false,
  },
  {
    placeType: 'A',
    placeKey: '1472174',
    locationId: '36981',
    name: 'Glasgow Airport',
    iata: 'GLA',
    city: 'Glasgow',
    region: 'Strathclyde',
    country: 'United Kingdom',
    countryIso: 'gb',
    ufi: 900038592,
    bookingId: 'airport-36981',
    lat: 55.864601135253906,
    lng: -4.432340145111084,
    alternative: ['GB,UK,Glasgow & The Clyde Valley,Scotland,Glasgow'],
    searchType: 'L',
    lang: 'en',
    index: 3,
    isPopular: true,
  },
  {
    placeType: 'T',
    placeKey: '992436971',
    locationId: '129208',
    name: 'Edinburgh - Waverley Train Station',
    city: 'Edinburgh',
    region: 'Midlothian',
    country: 'United Kingdom',
    countryIso: 'gb',
    ufi: 25305,
    bookingId: 'train-25305',
    lat: 55.951698303222656,
    lng: -3.1895899772644043,
    alternative: ['GB,UK'],
    searchType: 'L',
    lang: 'en',
    index: 4,
    isPopular: false,
  },
  {
    placeType: 'T',
    placeKey: '992437021',
    locationId: '129213',
    name: 'Manchester - Piccadilly Train Station',
    city: 'Manchester',
    region: 'England',
    country: 'United Kingdom',
    countryIso: 'gb',
    ufi: 1158,
    bookingId: 'train-1158',
    lat: 53.47669982910156,
    lng: -2.2309000492095947,
    alternative: ['GB,UK'],
    searchType: 'L',
    lang: 'en',
    index: 5,
    isPopular: false,
  },
]
const SearchLocationProps = {
  selectedLocation: '',
  setSelectedLocation: mockSetSelectedLocation,
  hanldleLocationSearch: mockHanldleLocationSearch,
  listState: true,
  locationList: locationListprops,
  setListState: mockSetListState,
  content: Labels.inputPickUpLocation,
}

describe('SearchLocation', () => {
  test('Component renders with no errors', () => {
    const { getByTestId } = utils.render(<SearchLocation {...SearchLocationProps} />)
    const searchLocationContainer = getByTestId('search-location')
    expect(searchLocationContainer).not.toBeNull()
  })

  test('Component renders with input and label', () => {
    const { getByTestId } = utils.render(<SearchLocation {...SearchLocationProps} />)
    const input = getByTestId('input-component')
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
    const input = getByTestId('input-component') as HTMLInputElement
    expect(input.value).toBe('')
    utils.fireEvent.change(input, { target: { value: 'Manchester' } })
    expect(mockHanldleLocationSearch).toHaveBeenCalledTimes(1)
  })

  test('Clicking the container focuses on the input', () => {
    const { getByTestId } = utils.render(<SearchLocation {...SearchLocationProps} />)
    const searchLocationContainer = getByTestId('search-location')
    const input = getByTestId('input-component') as HTMLInputElement
    utils.fireEvent.click(searchLocationContainer)
    expect(document.activeElement).toBe(input)
  })

  test('Component Renders with locations list and items fire event', () => {
    const { getByTestId, getAllByTestId } = utils.render(<SearchLocation {...SearchLocationProps} />)
    const locationListContainer = getByTestId('location-list-container')
    expect(locationListContainer).not.toBeNull()
    const locationList = getByTestId('location-list')
    expect(locationList).not.toBeNull()
    const listItems = getAllByTestId('location-list__item')
    expect(listItems.length).toBe(locationListprops.length)

    utils.fireEvent.click(listItems[0])
    expect(mockSetListState).toHaveBeenCalledTimes(2)
    expect(mockSetSelectedLocation).toHaveBeenCalledTimes(1)
  })
})
