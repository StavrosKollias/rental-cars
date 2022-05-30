import { ISearchLocationContent } from '../../constants/Labels/ILabels'

export interface ISearchLocationProps {
  className?: string
  selectedLocation: string
  content: ISearchLocationContent
  setSelectedLocation: (value: string) => void
}
