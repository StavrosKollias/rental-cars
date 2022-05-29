export interface IInputContent {
  type: string
  id: string
  ariaLabel: string
  ariaRequired: string
  className: string
  name: string
  autoComplete: string
}

export interface ISelectContent {
  id: string
  label: string
  className: string
  name: string
  ariaLabel: string
  timeGap: number
}

export interface ILabelContent {
  htmlfor: string
  labelContext: string
  className: string
}

export interface ISearchLocationContent {
  input: IInputContent
  label: ILabelContent
}

export interface ITimeSelectContent {
  select: ISelectContent
  label: ILabelContent
}

export interface ILabelsContent {
  inputPickUpLocation: ISearchLocationContent
  inputDropoffLocation: ISearchLocationContent
  selectPickUpTime: ITimeSelectContent
  selectDropOffTime: ITimeSelectContent
}
