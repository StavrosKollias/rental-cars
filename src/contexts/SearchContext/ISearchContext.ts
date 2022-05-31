import { ILabelsContent } from '../../constants/Labels/ILabels'

export interface ILocationItem {
  alternative: Array<string>
  bookingId: string
  city?: string
  country: string
  countryIso: string
  iata?: string
  index: number
  isPopular: boolean
  lang: string
  lat: number
  lng: number
  locationId: string
  name: string
  placeKey: string
  placeType: string
  region?: string
  searchType: string
  ufi: number
}

export interface ISearchContextProps {
  children: any
}

export interface ISearchContextState {
  locationsList: Array<any>
  selectedPickUpLocation: string
  setSelectedPickUpLocation: (value: string) => void
  selectedDropOffLocation: string
  setSelectedDropOffLocation: (value: string) => void
  pickUpListState: boolean
  setPickUpListState: (value: boolean) => void
  dropOffListState: boolean
  setDropOffListState: (value: boolean) => void
  selectedPickUpTime: string
  setSelectedPickUpTime: (value: string) => void
  selectedDropOffTime: string
  setSelectedDropOffTime: (value: string) => void
  dropOffLocationFlag: boolean
  setDropOffLocationFlag: (value: boolean) => void
  selectedPickUpDate: string
  setSelectedPickUpDate: (value: string) => void
  selectedDropOffDate: string
  setSelectedDropOffDate: (value: string) => void
  debouncedGetLocations: (query: any) => Promise<void>
  content: ILabelsContent
}
