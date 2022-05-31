import { ILabelsContent } from '../../constants/Labels/ILabels'

export interface ISearchContextProps {
  children: any
}

export interface ISearchContextState {
  // getLocationsList: () => void
  locationsList: Array<any>
  selectedPickUpLocation: string
  setSelectedPickUpLocation: (value: string) => void
  selectedDropOffLocation: string
  setSelectedDropOffLocation: (value: string) => void
  selectedPickUpTime: string
  setSelectedPickUpTime: (value: string) => void
  selectedDropOffTime: string
  setSelectedDropOffTime: (value: string) => void
  dropOffLocationFlag: boolean
  setDropOffLocationFlag: (value: boolean) => void
  selectedPickUpDate: string
  setSelectedPickUpDate: (value: string) => void
  selectedDropOffDate: string
  setSelectedDropOffDate: (value: string) => void
  content: ILabelsContent
}
