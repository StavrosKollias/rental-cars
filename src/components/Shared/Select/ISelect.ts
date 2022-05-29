import { ILabelProps } from '../Label'

export interface ISelectProps {
  options: Array<string>
  id: string
  value: string
  className: string
  ariaLabel: string
  name: string
  label: ILabelProps
  onChange: (value: string) => void
}
