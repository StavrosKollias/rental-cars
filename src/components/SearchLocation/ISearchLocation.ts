import { ISearchLocationContent } from '../../constants/Labels/ILabels'

export interface ISearchLocationProps {
  selectedLocation: string
  content: ISearchLocationContent
  setSelectedLocation: (value: string) => void
  className?: string
}
