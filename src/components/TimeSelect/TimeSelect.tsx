import React from 'react'
import { ITimeSelectProps } from './'
import { ClockIcon } from '../../assets/Icons'
import { Select } from '../Shared/Select'
import { getTimesArray } from '../../utils'

export const TimeSelect: React.FC<ITimeSelectProps> = ({ content, selectedTime, setTime }) => {
  const selectOptions: Array<string> = getTimesArray(content.select.timeGap)

  const hangleChangeSelectTime = (value) => {
    setTime(value)
  }

  return (
    <div className="time-container" data-testid="time-select-container">
      <span data-testid="clock-icon-container">
        <ClockIcon />
      </span>

      <Select
        {...content.select}
        label={content.label}
        options={selectOptions}
        value={selectedTime}
        className="time-container_select"
        onChange={hangleChangeSelectTime}
      />
    </div>
  )
}
