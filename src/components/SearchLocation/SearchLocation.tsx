import React from 'react'
import { ISearchLocationProps } from './'
import { SearchIcon } from '../../assets/Icons'
import { Input } from '../Shared/Input'

export const SearchLocation: React.FC<ISearchLocationProps> = ({ selectedLocation, setSelectedLocation, content }) => {
  const hangleChangeIpnutLocation = (value: string) => {
    setSelectedLocation(value)
  }
  return (
    <div className="search-location" data-testid="search-location">
      <span data-testid="search-icon-container">
        <SearchIcon />
      </span>
      <Input {...content.input} label={content.label} value={selectedLocation} onChange={hangleChangeIpnutLocation} />
    </div>
  )
}
