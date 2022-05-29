import { ITimeSelectContent } from 'src/constants/Labels/ILabels'

export interface ITimeSelectProps {
  selectedTime: string
  setTime: (value: string) => void
  content: ITimeSelectContent
}
