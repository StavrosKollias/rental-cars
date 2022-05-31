import { IDatePickerContent } from '../../constants/Labels/ILabels'

export interface IDatePickerProps {
  className?: string
  selectedDate: string
  content: IDatePickerContent
  setSelectedDate: (value: string) => void
}
