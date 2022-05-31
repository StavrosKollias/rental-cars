import React from 'react'
import { ILocationListProps } from './'

// placeType="A airport, C city, T train, I Region"

// airport info = name type A iata
// city, region , country

// city info = name
// then  region, country

// region info = name  country

// train = name  then City Region country

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
            <li className="location-not-found">{getStringFromArray([name, iata])}</li>
          ) : (
            <li
              key={i}
              tabIndex={0}
              data-testid="location-list__item"
              className={`location-list-container__list-item ${selectedClass}`}
              onClick={() => {
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
