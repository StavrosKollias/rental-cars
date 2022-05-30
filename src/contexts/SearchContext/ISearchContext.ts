import { ILabelsContent } from '../../constants/Labels/ILabels'

export interface ISearchContextProps {
  children: any
}

export interface ISearchContextState {
  getLocationsList: () => void
  locationsList: Array<any>
  selectedLocation: ''
  setSelectedLocation: Function
  content: ILabelsContent
}
