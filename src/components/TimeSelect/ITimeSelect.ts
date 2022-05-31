import { ITimeSelectContent } from '../../constants/Labels/ILabels'

export interface ITimeSelectProps {
  selectedTime: string
  content: ITimeSelectContent
  setTime: (value: string) => void
  className?: string
}
