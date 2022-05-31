import React from 'react'
import { ILocationListProps } from './'

export const LocationList: React.FC<ILocationListProps> = ({ locations, selectedValue, setSelectedValue }) => {
  const getPlaceType = (type: string) => {
    switch (type) {
      case 'A':
        return 'Airport'
      case 'C':
        return 'City'
      case 'T':
        return 'Train'
      case 'I':
        return 'Region'
      case 'G':
        return 'District'
      case 'Z':
        return 'Place'
    }
  }

  const getStringFromArray = (array: Array<string>) => {
    return array.filter(Boolean).join(', ')
  }

  return (
    <div data-testid="location-list-container" className="location-list-container">
      <ul data-testid="location-list" className="location-list-container__list">
        {locations.map((e, i) => {
          const { placeType, name, iata = '', city = '', region = '', country } = e
          const selectedValueElement = getStringFromArray([name, iata, city, region, country])
          const selectedClass = selectedValueElement === selectedValue ? 'selected' : ''
          const noResults = getStringFromArray([name, iata]) == 'No results found'
          return noResults ? (
            <li key={i} className="location-not-found">
              {getStringFromArray([name, iata])}
            </li>
          ) : (
            <li
              key={i}
              tabIndex={0}
              data-testid="location-list__item"
              className={`location-list-container__list-item ${selectedClass}`}
              onClick={(event) => {
                event.stopPropagation()
                setSelectedValue(selectedValueElement)
              }}
              onKeyDown={(event) => {
                if (event.key == 'Enter' || event.keyCode == 13) setSelectedValue(selectedValueElement)
              }}
            >
              <span className={`location-badge-${placeType} badge`}>{getPlaceType(placeType)}</span>
              <div className="location-details">
                <span className="location-name">{getStringFromArray([name, iata])}</span>

                <span className="location-region">{getStringFromArray([city, region, country])}</span>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
