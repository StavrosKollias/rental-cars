import { IInputProps } from '../Input/IInput'

export interface IInputCheckBoxProps extends IInputProps {
  checked: boolean
  onChange: (value: any) => void
}
