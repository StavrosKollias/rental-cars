export interface IInputContent {
  type: string
  id: string
  ariaLabel: string
  ariaRequired: string
  className: string
  name: string
  autoComplete: string
}

export interface ILabelContent {
  htmlfor: string
  labelContext: string
  className: string
}

export interface ILabelsContent {
  inputPickUpLocation: {
    input: IInputContent
    label: ILabelContent
  }
}
