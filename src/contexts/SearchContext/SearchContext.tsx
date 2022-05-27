import React from 'react'

import { ISearchContextProps, ISearchContextState } from './'
import { Labels } from 'src/constants/Labels'

export const SearchContextDefaults: ISearchContextState = {
  locationsList: [],
  getLocationsList: Function,
  selectedLocation: '',
  setSelectedLocation: Function,
  content: Labels,
}

export const SearchContext = React.createContext(SearchContextDefaults)
export const useSearchContext = () => React.useContext(SearchContext)

export const SearchProvider: React.FC<ISearchContextProps> = ({ children }) => {
  const [locationsList, setLocationsList] = React.useState<Array<any>>([])
  const [selectedLocation, setSelectedLocation] = React.useState<string>('')
  const [content, setContent] = React.useState<any>(Labels)

  return (
    <SearchContext.Provider
      value={{
        getLocationsList: () => {
          console.log('GetLocations')
          setLocationsList([''])
        },
        locationsList,
        selectedLocation: '',
        setSelectedLocation: Function,
        content,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}
