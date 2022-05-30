import { IDatePickerContent } from '../../constants/Labels/ILabels'

export interface IDatePickerProps {
  selectedDate: string
  content: IDatePickerContent
  setSelectedDate: (value: string) => void
}
