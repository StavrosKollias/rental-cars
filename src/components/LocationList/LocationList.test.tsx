import React from 'react'
import { LocationList } from './'
import * as utils from '../../test_utils/utils'
import { ILocationItem } from '../../contexts/SearchContext'

const mockSelectedValue = jest.fn()
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
  {
    placeType: 'T',
    placeKey: '992437016',
    locationId: '38056',
    name: 'London - Victoria Station',
    city: 'London',
    region: 'England',
    country: 'United Kingdom',
    countryIso: 'gb',
    ufi: 23862,
    bookingId: 'train-23862',
    lat: 51.49509811401367,
    lng: -0.1441899985074997,
    alternative: ['GB,UK'],
    searchType: 'L',
    lang: 'en',
    index: 6,
    isPopular: false,
  },
  {
    placeType: 'T',
    placeKey: '992436996',
    locationId: '105963',
    name: 'Liverpool Lime Street Station',
    city: 'Liverpool',
    region: 'England',
    country: 'United Kingdom',
    countryIso: 'gb',
    ufi: 24304,
    bookingId: 'train-24304',
    lat: 53.40879821777344,
    lng: -2.9897899627685547,
    alternative: ['GB,UK'],
    searchType: 'L',
    lang: 'en',
    index: 7,
    isPopular: false,
  },
]

describe('Location List', () => {
  test('Component renders with no error', () => {
    const { getByTestId } = utils.render(
      <LocationList selectedValue="" locations={locationListprops} setSelectedValue={mockSelectedValue} />,
    )

    const locationListContainer = getByTestId('location-list-container')
    expect(locationListContainer).not.toBeNull()
    const locationList = getByTestId('location-list')
    expect(locationList).not.toBeNull()
  })

  test('Component renders with correct props', () => {
    const { getAllByTestId } = utils.render(
      <LocationList selectedValue="" locations={locationListprops} setSelectedValue={mockSelectedValue} />,
    )
    const listItems = getAllByTestId('location-list__item')
    expect(listItems.length).toBe(7)

    expect(listItems[0].getElementsByClassName('location-name')[0].textContent).toBe(
      locationListprops[0].name + ', ' + locationListprops[0].iata,
    )
    expect(listItems[0].getElementsByClassName('location-region')[0].textContent).toBe(
      'London, Greater London, United Kingdom',
    )
  })

  test('onclick item fires the setSelectedvalue', () => {
    const { getAllByTestId } = utils.render(
      <LocationList selectedValue="" locations={locationListprops} setSelectedValue={mockSelectedValue} />,
    )
    const listItems = getAllByTestId('location-list__item')
    utils.fireEvent.click(listItems[0])
    expect(mockSelectedValue).toHaveBeenCalledTimes(1)
    utils.fireEvent.click(listItems[1])
    expect(mockSelectedValue).toHaveBeenCalledTimes(2)
  })
})
