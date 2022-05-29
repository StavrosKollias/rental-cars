import React from 'react'
import { ISelectProps } from '.'
import { Label } from '../Label'

export const Select: React.FC<ISelectProps> = ({ options, id, className, ariaLabel, name, label, value, onChange }) => {
  return (
    <div className={`${className}-container`} data-testid="select-container">
      <Label {...label} />
      <select
        id={id}
        className={className}
        name={name}
        onChange={(event) => {
          onChange(event.target.value)
        }}
        data-testid="select-component"
        value={value}
        aria-label={ariaLabel}
      >
        {options.map((item, index) => {
          return (
            <option data-testid="select-option" key={index} value={item}>
              {item}
            </option>
          )
        })}
      </select>
    </div>
  )
}
