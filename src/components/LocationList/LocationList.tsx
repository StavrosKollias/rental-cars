import React from 'react'
import { ILocationListProps } from './'

// placeType="A airport, C city, T train, I Region"

// airport info = name type A iata
// city, region , country

// city info = name
// then  region, country

// region info = name  country

// train = name  then City Region country

export const LocationList: React.FC<ILocationListProps> = ({ locations, setSelectedValue }) => {
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

  return (
    <div data-testid="location-list-container">
      <ul data-testid="location-list" className="location-list">
        {locations.map((e, i) => {
          const { placeType, name, iata = '', city = '', region = '', country } = e
          const selectedValue = [name, iata, city, region, country].filter(Boolean).join(', ')
          return (
            <li
              key={i}
              data-testid="location-list__item"
              className="location-list__item"
              onClick={() => setSelectedValue(selectedValue)}
            >
              <span className={`location-badge-${placeType}`}>{getPlaceType(placeType)}</span>
              <div>
                <span className="location-name">
                  {name}
                  {iata}
                </span>

                <span className="location-region">
                  {city}, {region}, {country}
                </span>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
