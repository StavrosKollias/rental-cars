import { ILabelProps } from '../Label'

export interface IInputProps {
  type: string
  value: string
  className: string
  ariaLabel: string
  autoComplete: string
  name: string
  id: string
  label: ILabelProps
  onChange: (value: string) => void
}
