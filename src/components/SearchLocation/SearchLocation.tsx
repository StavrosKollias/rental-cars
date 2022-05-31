import React from 'react'
import { ISearchLocationProps } from './'
import { SearchIcon } from '../../assets/Icons'
import { Input } from '../Shared/Input'
import { LocationList } from '../LocationList'

export const SearchLocation: React.FC<ISearchLocationProps> = ({
  locationList,
  selectedLocation,
  hanldleLocationSearch,
  setSelectedLocation,
  listState,
  setListState,
  content,
  className = '',
}) => {
  const inputClassName: string = selectedLocation ? 'inserted' : ''
  const focusRef = React.useRef<HTMLInputElement>(null)

  return (
    <div
      className={`search-location ${className}`}
      data-testid="search-location"
      onClick={() => {
        focusRef.current && focusRef.current.focus()
        focusRef.current.select()
        locationList.length > 0 && setListState(true)
      }}
    >
      <span data-testid="search-icon-container">
        <SearchIcon />
      </span>
      <Input
        inputRef={focusRef}
        {...content.input}
        className={inputClassName}
        label={content.label}
        value={selectedLocation}
        onChange={hanldleLocationSearch}
        onBlur={(event) => {
          event.stopPropagation()
          requestAnimationFrame(() => {
            if (!document.activeElement.classList.contains('location-list-container__list-item')) {
              setListState(false)
            }
          })
        }}
      />
      {listState && (
        <LocationList
          selectedValue={selectedLocation}
          locations={locationList}
          setSelectedValue={(value: string) => {
            setListState(false)
            setSelectedLocation(value)
          }}
        />
      )}
    </div>
  )
}
