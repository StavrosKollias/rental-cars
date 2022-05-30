import { ITimeSelectContent } from '../../constants/Labels/ILabels'

export interface ITimeSelectProps {
  className?: string
  selectedTime: string
  content: ITimeSelectContent
  setTime: (value: string) => void
}
