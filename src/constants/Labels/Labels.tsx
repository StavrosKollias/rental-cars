enum pickUpLocationLabel {
  htmlfor = 'ssearch-pickUp-location__input',
  labelContext = 'Pick Up location',
  className = '',
}

enum pickUpLocationInput {
  type = 'text',
  id = 'search-pickUp-location__input',
  ariaLabel = 'Pick Up location',
  ariaRequired = 'true',
  className = 'input-location',
  name = 'Pick Up Location',
  autoComplete = 'off',
}

export const Labels = {
  inputPickUpLocation: {
    input: pickUpLocationInput,
    label: pickUpLocationLabel,
  },
}
