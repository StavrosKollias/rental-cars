import React from 'react'
import { debounce } from 'lodash'
import { ILocationItem, ISearchContextProps, ISearchContextState } from './'
import { ILabelsContent, Labels } from '../../constants/Labels'
import { GetLocationsList } from '../../api'

export const SearchContextDefaults: ISearchContextState = {
  locationsList: [],
  // getLocationsList: Function,
  selectedPickUpLocation: '',
  setSelectedPickUpLocation: Function,
  selectedDropOffLocation: '',
  setSelectedDropOffLocation: Function,
  pickUpListState: false,
  setPickUpListState: (value: boolean) => value,
  dropOffListState: false,
  setDropOffListState: (value: boolean) => value,
  selectedPickUpTime: '',
  setSelectedPickUpTime: Function,
  selectedDropOffTime: '',
  setSelectedDropOffTime: Function,
  dropOffLocationFlag: false,
  setDropOffLocationFlag: (value: boolean) => value,
  selectedPickUpDate: '',
  setSelectedPickUpDate: Function,
  selectedDropOffDate: '',
  setSelectedDropOffDate: Function,
  debouncedGetLocations: (query: any) => query,
  content: Labels,
}

export const SearchContext = React.createContext(SearchContextDefaults)
export const useSearchContext = () => React.useContext(SearchContext)

export const SearchProvider: React.FC<ISearchContextProps> = ({ children }) => {
  const [locationsList, setLocationsList] = React.useState<Array<ILocationItem>>([])
  // Location
  const [selectedPickUpLocation, setSelectedPickUpLocation] = React.useState<string>('')
  const [selectedDropOffLocation, setSelectedDropOffLocation] = React.useState<string>('')
  const [pickUpListState, setPickUpListState] = React.useState<boolean>(false)
  const [dropOffListState, setDropOffListState] = React.useState<boolean>(false)
  // Time
  const [selectedPickUpTime, setSelectedPickUpTime] = React.useState<string>('')
  const [selectedDropOffTime, setSelectedDropOffTime] = React.useState<string>('')

  //Date
  const [selectedPickUpDate, setSelectedPickUpDate] = React.useState<string>('')
  const [selectedDropOffDate, setSelectedDropOffDate] = React.useState<string>('')

  // checkbox
  const [dropOffLocationFlag, setDropOffLocationFlag] = React.useState<boolean>(false)

  const [content, setContent] = React.useState<ILabelsContent>(Labels)
  // debounce
  const debouncedGetLocations = React.useRef(
    debounce(async (query) => {
      getLocationsList(query)
    }, 300),
  ).current

  const getLocationsList = async (term: string) => {
    const response = await GetLocationsList(
      `https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&s0lrRows=6&solrTerm=${term}`,
    )
    setLocationsList(response.results.docs)
  }

  return (
    <SearchContext.Provider
      value={{
        locationsList,
        selectedPickUpLocation,
        setSelectedPickUpLocation,
        selectedDropOffLocation,
        setSelectedDropOffLocation,
        pickUpListState,
        setPickUpListState,
        dropOffListState,
        setDropOffListState,
        selectedPickUpTime,
        setSelectedPickUpTime,
        selectedDropOffTime,
        setSelectedDropOffTime,
        dropOffLocationFlag,
        setDropOffLocationFlag,
        selectedPickUpDate,
        setSelectedPickUpDate,
        selectedDropOffDate,
        setSelectedDropOffDate,
        debouncedGetLocations,
        content,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}
