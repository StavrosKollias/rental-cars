import { ILocationItem } from '../../contexts/SearchContext'

export interface ILocationListProps {
  selectedValue: string
  locations: Array<ILocationItem>
  setSelectedValue: (value: string) => void
}
