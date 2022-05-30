import React from 'react'
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
    dropOffLocationFlag,
    content,
  } = useSearchContext()
  return (
    <div className="search-bar">
      <SearchLocation
        className="m-r-05"
        content={content.inputPickUpLocation}
        selectedLocation={selectedPickUpLocation}
        setSelectedLocation={setSelectedPickUpLocation}
      />

      {dropOffLocationFlag && (
        <SearchLocation
          className="m-r-05"
          content={content.inputDropoffLocation}
          selectedLocation={selectedDropOffLocation}
          setSelectedLocation={setSelectedDropOffLocation}
        />
      )}

      <div className="flex">
        <DatePicker content={content.datePickerPickUPDate} selectedDate="" setSelectedDate={() => {}} />
        <TimeSelect
          className="m-r-05"
          content={content.selectPickUpTime}
          selectedTime={selectedPickUpTime}
          setTime={setSelectedPickUpTime}
        />
      </div>

      <div className="flex">
        <DatePicker content={content.datePickerDropOffDate} selectedDate="" setSelectedDate={() => {}} />
        <TimeSelect
          className="m-r-05"
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
          console.log('searching hahaha')
        }}
      />

      {/* 
      <DatePicker />
     
      <TimeSelect />
      <DatePicker /> */}
    </div>
  )
}
