import { ILabelProps } from '../Label'

export interface IInputProps {
  type: string
  value: string
  className?: string
  inputRef?: React.MutableRefObject<HTMLInputElement>
  ariaLabel: string
  autoComplete: string
  name: string
  id: string
  label: ILabelProps
  onChange: (value: string) => void
  onBlur?: () => void
}
