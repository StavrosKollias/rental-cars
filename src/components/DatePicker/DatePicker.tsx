import React from 'react'
import { IDatePickerProps } from './'
import { DateIcon } from '../../assets/Icons'
import { Input } from '../Shared/Input'

export const DatePicker: React.FC<IDatePickerProps> = ({ selectedDate, setSelectedDate, content, className = '' }) => {
  const hangleChangeIpnutDate = (value: string) => {
    setSelectedDate(value)
  }

  const dateInputRef = React.useRef<HTMLInputElement>(null)
  return (
    <div
      className={`date-picker ${className}`}
      data-testid="date-picker"
      onClick={() => {
        dateInputRef.current && dateInputRef.current.focus()
        dateInputRef.current.select()
      }}
    >
      <span data-testid="date-icon-container">
        <DateIcon />
      </span>
      <Input
        inputRef={dateInputRef}
        {...content.input}
        label={content.label}
        value={selectedDate}
        onChange={hangleChangeIpnutDate}
      />
    </div>
  )
}
