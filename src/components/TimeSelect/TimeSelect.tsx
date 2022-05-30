import React from 'react'
import { ITimeSelectProps } from './'
import { ClockIcon } from '../../assets/Icons'
import { Select } from '../Shared/Select'
import { getTimesArray } from '../../utils'

export const TimeSelect: React.FC<ITimeSelectProps> = ({ content, className = '', selectedTime, setTime }) => {
  const selectRef = React.useRef<HTMLSelectElement>(null)
  const selectOptions: Array<string> = getTimesArray(content.select.timeGap)

  const hangleChangeSelectTime = (value) => {
    setTime(value)
  }

  return (
    <div className={`time-container ${className}`} data-testid="time-select-container">
      <span data-testid="clock-icon-container">
        <ClockIcon />
      </span>

      <Select
        {...content.select}
        selectRef={selectRef}
        label={content.label}
        options={selectOptions}
        value={selectedTime}
        onChange={hangleChangeSelectTime}
      />
    </div>
  )
}
