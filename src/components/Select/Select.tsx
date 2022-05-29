import React from 'react'
import { ISelectProps } from './'

export const Select: React.FC<ISelectProps> = ({ options, id, className, label, value, onChange }) => {
  return (
    <select
      id={id}
      className={className}
      name={label}
      onChange={(event) => {
        console.log(event.target.value)
        onChange(event.target.value)
      }}
      data-testid="select-component"
      value={value}
      aria-label={label}
    >
      {options.map((item, index) => {
        return (
          <option data-testid="select-option" key={index} value={item}>
            {item}
          </option>
        )
      })}
    </select>
  )
}
