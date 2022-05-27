import { ILabelsContent } from 'src/constants/Labels'

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
