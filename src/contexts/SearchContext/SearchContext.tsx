import React from 'react'

import { ISearchContextProps, ISearchContextState } from './'
import { ILabelsContent, Labels } from '../../constants/Labels'

export const SearchContextDefaults: ISearchContextState = {
  locationsList: [],
  getLocationsList: Function,
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
  content: Labels,
}

export const SearchContext = React.createContext(SearchContextDefaults)
export const useSearchContext = () => React.useContext(SearchContext)

export const SearchProvider: React.FC<ISearchContextProps> = ({ children }) => {
  const [locationsList, setLocationsList] = React.useState<Array<any>>([])
  // Location
  const [selectedPickUpLocation, setSelectedPickUpLocation] = React.useState<string>('')
  const [selectedDropOffLocation, setSelectedDropOffLocation] = React.useState<string>('')

  // Time
  const [selectedPickUpTime, setSelectedPickUpTime] = React.useState<string>('')
  const [selectedDropOffTime, setSelectedDropOffTime] = React.useState<string>('')

  //Date

  // checkbox

  const [dropOffLocationFlag, setDropOffLocationFlag] = React.useState<boolean>(false)

  const [content, setContent] = React.useState<ILabelsContent>(Labels)

  return (
    <SearchContext.Provider
      value={{
        getLocationsList: () => {
          console.log('GetLocations')
          setLocationsList([''])
        },
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
        content,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}
