import React from 'react'
import { IInputProps } from '.'
import { Label } from '../Label'

export const Input: React.FC<IInputProps> = ({
  name,
  id,
  label,
  type,
  value,
  ariaLabel,
  autoComplete,
  className,
  onChange,
}) => {
  return (
    <div className={`${className}-container`} data-testid="search-input-container">
      <Label {...label} />
      <input
        data-testid="search-input"
        type={type}
        id={id}
        aria-label={ariaLabel}
        aria-required="true"
        className={className}
        value={value}
        name={name}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  )
}
