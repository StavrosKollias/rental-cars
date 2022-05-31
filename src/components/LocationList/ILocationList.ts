import { ILocationItem } from '../../contexts/SearchContext'

export interface ILocationListProps {
  locations: Array<ILocationItem>
  setSelectedValue: (value: string) => void
}
