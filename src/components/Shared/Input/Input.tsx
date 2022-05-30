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
  className = '',
  inputRef,
  onChange,
}) => {
  return (
    <div className={`input-container ${className}`} data-testid="input-container">
      <Label {...label} className="input-container__label" />
      <input
        ref={inputRef}
        data-testid="input-component"
        type={type}
        id={id}
        aria-label={ariaLabel}
        aria-required="true"
        className={`input-container__input ${className}`}
        value={value}
        name={name}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  )
}
