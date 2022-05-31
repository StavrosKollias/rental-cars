import { ILocationItem } from 'src/contexts/SearchContext'
import { ISearchLocationContent } from '../../constants/Labels/ILabels'

export interface ISearchLocationProps {
  locationList?: Array<ILocationItem>
  selectedLocation: string
  content: ISearchLocationContent
  setSelectedLocation: (value: string) => void
  className?: string
}
