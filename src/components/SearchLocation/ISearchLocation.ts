import { ISearchLocationContent } from '../../constants/Labels/ILabels'
import { ILocationItem } from '../../contexts/SearchContext/ISearchContext'

export interface ISearchLocationProps {
  locationList?: Array<ILocationItem>
  selectedLocation: string
  content: ISearchLocationContent
  hanldleLocationSearch: (value: string) => void
  setSelectedLocation: (value: string) => void
  listState: boolean
  setListState: (value: boolean) => void
  className?: string
}
