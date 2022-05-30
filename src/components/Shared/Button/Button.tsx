import React from 'react'
import { IButtonProps } from './'

export const Button: React.FC<IButtonProps> = ({ id, label, ariaLabel, title, className, onClick }) => {
  return (
    <button
      data-testid="button-component"
      id={id}
      aria-label={ariaLabel}
      title={title}
      className={className}
      onClick={onClick}
    >
      {label}
    </button>
  )
}
