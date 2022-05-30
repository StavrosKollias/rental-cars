import React from 'react'
import { IDatePickerProps } from './'
import { DateIcon } from '../../assets/Icons'
import { Input } from '../Shared/Input'

export const DatePicker: React.FC<IDatePickerProps> = ({ selectedDate, setSelectedDate, content }) => {
  const hangleChangeIpnutDate = (value: string) => {
    setSelectedDate(value)
  }
  return (
    <div className="date-picker" data-testid="date-picker">
      <span data-testid="date-icon-container">
        <DateIcon />
      </span>
      <Input {...content.input} label={content.label} value={selectedDate} onChange={hangleChangeIpnutDate} />
    </div>
  )
}
