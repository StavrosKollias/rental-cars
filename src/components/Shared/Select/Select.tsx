import React from 'react'
import { ISelectProps } from '.'
import { Label } from '../Label'

export const Select: React.FC<ISelectProps> = ({
  options,
  id,
  className = '',
  selectRef,
  ariaLabel,
  name,
  label,
  value,
  onChange,
}) => {
  return (
    <div className={`select-container ${className}`} data-testid="select-container">
      <Label {...label} className="select-container__label" />
      <select
        ref={selectRef}
        id={id}
        className={`select-container__select ${className}`}
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
