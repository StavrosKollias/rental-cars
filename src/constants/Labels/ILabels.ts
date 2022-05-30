export interface IInputContent {
  type: string
  id: string
  ariaLabel: string
  ariaRequired: string
  name: string
  autoComplete: string
}

export interface ISelectContent {
  id: string
  label: string
  name: string
  ariaLabel: string
  timeGap: number
}

export interface ILabelContent {
  htmlfor: string
  labelContext: string
}

export interface ISearchLocationContent {
  input: IInputContent
  label: ILabelContent
}

export interface IDatePickerContent {
  input: IInputContent
  label: ILabelContent
}

export interface ITimeSelectContent {
  select: ISelectContent
  label: ILabelContent
}

export interface IPageContent {
  title: string
  benefits: Array<string>
}

export interface IDifDropOffInputCheckBoxContent extends ISearchLocationContent {}

export interface ILabelsContent {
  inputPickUpLocation: ISearchLocationContent
  inputDropoffLocation: ISearchLocationContent
  datePickerPickUPDate: IDatePickerContent
  datePickerDropOffDate: IDatePickerContent
  selectPickUpTime: ITimeSelectContent
  selectDropOffTime: ITimeSelectContent
  checkboxDifferentDropoffLocation: IDifDropOffInputCheckBoxContent
  pageContnet: IPageContent
}
