import React from 'react'

import { ISearchContextProps, ISearchContextState } from './'
import { ILabelsContent, Labels } from '../../constants/Labels'

export const SearchContextDefaults: ISearchContextState = {
  locationsList: [],
  getLocationsList: () => {},
  selectedLocation: '',
  setSelectedLocation: () => {},
  content: Labels,
}

export const SearchContext = React.createContext(SearchContextDefaults)
export const useSearchContext = () => React.useContext(SearchContext)

export const SearchProvider: React.FC<ISearchContextProps> = ({ children }) => {
  const [locationsList, setLocationsList] = React.useState<Array<any>>([])
  const [selectedLocation, setSelectedLocation] = React.useState<string>('')
  const [content, setContent] = React.useState<ILabelsContent>(Labels)

  return (
    <SearchContext.Provider
      value={{
        getLocationsList: () => {
          console.log('GetLocations')
          setLocationsList([''])
        },
        locationsList,
        selectedLocation: '',
        setSelectedLocation: () => {
          setSelectedLocation
        },
        content,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}
