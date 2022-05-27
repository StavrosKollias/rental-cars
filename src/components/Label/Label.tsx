import React from 'react'
import { ILabelProps } from './ILabel'

export const Label: React.FC<ILabelProps> = ({ htmlfor, labelContext, className }) => {
  return (
    <label className={className} htmlFor={htmlfor} data-testid="input-label">
      {labelContext}
    </label>
  )
}
