import React from 'react'
import { IInputCheckBoxProps } from '.'
import { Label } from '../Label'

export const InputCheckBox: React.FC<IInputCheckBoxProps> = ({
  name,
  id,
  label,
  value,
  checked,
  ariaLabel,
  autoComplete,
  className,
  onChange,
}) => {
  return (
    <div className={`${className}-container`} data-testid="input-container">
      <input
        data-testid="input-component"
        type="checkbox"
        id={id}
        aria-label={ariaLabel}
        aria-required="true"
        className={className}
        value={value}
        checked={checked}
        name={name}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
      />
      <Label {...label} />
    </div>
  )
}
