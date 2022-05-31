import React, { useEffect } from 'react'
import { SearchLocation } from '../SearchLocation'

import { TimeSelect } from '../TimeSelect'
import { DatePicker } from '../DatePicker'
import { useSearchContext } from '../../contexts/SearchContext'
import { Button } from '../Shared/Button'

export const SearchBar: React.FC = () => {
  const {
    setSelectedPickUpLocation,
    selectedPickUpLocation,
    setSelectedDropOffLocation,
    selectedDropOffLocation,
    selectedPickUpTime,
    setSelectedPickUpTime,
    selectedDropOffTime,
    setSelectedDropOffTime,
    selectedPickUpDate,
    setSelectedPickUpDate,
    selectedDropOffDate,
    setSelectedDropOffDate,
    dropOffLocationFlag,
    content,
  } = useSearchContext()

  return (
    <div className="search-bar">
      <SearchLocation
        content={content.inputPickUpLocation}
        selectedLocation={selectedPickUpLocation}
        setSelectedLocation={setSelectedPickUpLocation}
      />

      {dropOffLocationFlag && (
        <SearchLocation
          content={content.inputDropoffLocation}
          selectedLocation={selectedDropOffLocation}
          setSelectedLocation={setSelectedDropOffLocation}
        />
      )}

      <div className="flex">
        <DatePicker
          content={content.datePickerPickUPDate}
          selectedDate={selectedPickUpDate}
          setSelectedDate={setSelectedPickUpDate}
        />
        <TimeSelect
          content={content.selectPickUpTime}
          selectedTime={selectedPickUpTime}
          setTime={setSelectedPickUpTime}
        />
      </div>

      <div className="flex">
        <DatePicker
          content={content.datePickerDropOffDate}
          selectedDate={selectedDropOffDate}
          setSelectedDate={setSelectedDropOffDate}
        />
        <TimeSelect
          content={content.selectDropOffTime}
          selectedTime={selectedDropOffTime}
          setTime={setSelectedDropOffTime}
        />
      </div>

      <Button
        id="search-button"
        className="btn btn-success"
        label="Search"
        ariaLabel="search button"
        title="search button"
        onClick={() => {
          console.log('Hey')
        }}
      />
    </div>
  )
}
