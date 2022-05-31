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
  content: Labels,
}

export const SearchContext = React.createContext(SearchContextDefaults)
export const useSearchContext = () => React.useContext(SearchContext)

export const SearchProvider: React.FC<ISearchContextProps> = ({ children }) => {
  const [locationsList, setLocationsList] = React.useState<Array<ILocationItem>>([])
  // Location
  const [selectedPickUpLocation, setSelectedPickUpLocation] = React.useState<string>('')
  const [selectedDropOffLocation, setSelectedDropOffLocation] = React.useState<string>('')

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

  const interactiveLocation = React.useRef('')

  const getLocationsList = async (term: string) => {
    const response = await GetLocationsList(
      `https://www.rentalcars.com/FTSAutocomplete.do?${new URLSearchParams({
        solrIndex: 'fts_en',
        s0lrRows: `${6}`,
        solrTerm: `${term}`,
      })}`,
    )
    setLocationsList(response.results.docs)
  }

  React.useEffect(() => {
    if (selectedDropOffLocation.length > 1) debouncedGetLocations(selectedDropOffLocation)
    return () => {
      debouncedGetLocations.cancel()
    }
  }, [selectedDropOffLocation])

  React.useEffect(() => {
    if (selectedPickUpLocation.length > 1) debouncedGetLocations(selectedPickUpLocation)
    return () => {
      debouncedGetLocations.cancel()
    }
  }, [selectedPickUpLocation])

  return (
    <SearchContext.Provider
      value={{
        locationsList,
        selectedPickUpLocation,
        setSelectedPickUpLocation,
        selectedDropOffLocation,
        setSelectedDropOffLocation,
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
        content,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}
