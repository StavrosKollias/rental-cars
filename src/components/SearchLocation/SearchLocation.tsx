import React from 'react'
import { useSearchContext } from 'src/contexts/SearchContext'
import { Input } from '../Shared/Input'

export const SearchLocation: React.FC = () => {
  const { selectedLocation, setSelectedLocation, content } = useSearchContext()

  const hanglechangeIpnutLocation = (value: string) => {
    console.log(value)
    setSelectedLocation(value)
  }
  return (
    <div className="search-location" data-testid="search-location">
      <Input
        {...content.inputPickUpLocation.input}
        label={content.inputPickUpLocation.label}
        value={selectedLocation}
        onChange={hanglechangeIpnutLocation}
      />
    </div>
  )
}
