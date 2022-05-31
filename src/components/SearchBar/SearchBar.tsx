import React, { useEffect } from 'react'
import { SearchLocation } from '../SearchLocation'

import { TimeSelect } from '../TimeSelect'
import { DatePicker } from '../DatePicker'
import { useSearchContext } from '../../contexts/SearchContext'
import { Button } from '../Shared/Button'

export const SearchBar: React.FC = () => {
  const {
    locationsList,
    setSelectedPickUpLocation,
    selectedPickUpLocation,
    setSelectedDropOffLocation,
    selectedDropOffLocation,

    pickUpListState,
    setPickUpListState,
    dropOffListState,
    setDropOffListState,
    selectedPickUpTime,
    setSelectedPickUpTime,
    selectedDropOffTime,
    setSelectedDropOffTime,
    selectedPickUpDate,
    setSelectedPickUpDate,
    selectedDropOffDate,
    setSelectedDropOffDate,
    dropOffLocationFlag,
    debouncedGetLocations,
    content,
  } = useSearchContext()

  const hanldleLocationPickUPSearch = (value: string) => {
    if (!pickUpListState) {
      setPickUpListState(!pickUpListState)
    }
    debouncedGetLocations(value)
    setSelectedPickUpLocation(value)
  }

  const hanldleLocationDropOffSearch = (value: string) => {
    console.log()
    if (!dropOffListState) {
      setDropOffListState(!dropOffListState)
    }

    debouncedGetLocations(value)
    setSelectedDropOffLocation(value)
  }

  dropOffListState
  pickUpListState
  return (
    <form>
      <div className="search-bar" data-testid="search-bar-component">
        <SearchLocation
          locationList={locationsList}
          content={content.inputPickUpLocation}
          selectedLocation={selectedPickUpLocation}
          hanldleLocationSearch={hanldleLocationPickUPSearch}
          setSelectedLocation={setSelectedPickUpLocation}
          listState={pickUpListState}
          setListState={setPickUpListState}
        />

        {dropOffLocationFlag && (
          <SearchLocation
            locationList={locationsList}
            content={content.inputDropoffLocation}
            selectedLocation={selectedDropOffLocation}
            hanldleLocationSearch={hanldleLocationDropOffSearch}
            setSelectedLocation={setSelectedDropOffLocation}
            listState={dropOffListState}
            setListState={setDropOffListState}
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
    </form>
  )
}
