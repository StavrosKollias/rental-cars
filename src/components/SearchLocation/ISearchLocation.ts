import { ISearchLocationContent } from 'src/constants/Labels'

export interface ISearchLocationProps {
  selectedLocation: string
  setSelectedLocation: (value: string) => void
  content: ISearchLocationContent
}
