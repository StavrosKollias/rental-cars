import { ILabelsContent } from '.'

const pickUpLocationLabel = {
  htmlfor: 'search-pickUp-location__input',
  labelContext: 'Pick Up location',
  className: '',
}

const pickUpLocationInput = {
  type: 'text',
  id: 'search-pickUp-location__input',
  ariaLabel: 'Pick Up location',
  ariaRequired: 'true',
  className: 'input-location',
  name: 'Pick Up Location',
  autoComplete: 'off',
}

const dropOffLocationLabel = {
  htmlfor: 'search-dropOff-location__input',
  labelContext: 'Drop-off location',
  className: '',
}

const dropOffLocationInput = {
  type: 'text',
  id: 'search-dropOff-location__input',
  ariaLabel: 'Pick Up location',
  ariaRequired: 'true',
  className: 'input-location',
  name: 'Drop-off Location',
  autoComplete: 'off',
}

const dropOffDateLabel = {
  htmlfor: 'date-dropOff__input',
  labelContext: 'Drop-off location',
  className: '',
}

const dropOffDateInput = {
  type: 'date',
  id: 'date-dropOff__input',
  ariaLabel: 'Drop-off Date',
  ariaRequired: 'true',
  className: 'input-date',
  name: 'Drop-off Date',
  autoComplete: 'off',
}

const pickUpDateLabel = {
  htmlfor: 'date-pickUp__input',
  labelContext: 'Pick Up Date',
  className: '',
}

const pickUpDateInput = {
  type: 'date',
  id: 'date-pickUp__input',
  ariaLabel: 'Pick Up Date',
  ariaRequired: 'true',
  className: 'input-date',
  name: 'Pick Up Date',
  autoComplete: 'off',
}

const pickUpTimeSelect = {
  id: 'select-pick-up__time',
  label: 'Time',
  ariaLabel: 'Pick up time',
  className: 'time-container_select',
  name: 'select-pick-up__time',
  timeGap: 30,
}

const pickUpTimeLabel = {
  htmlfor: 'select-pick-up__time',
  labelContext: 'Time',
  className: '',
}

const dropOffTimeSelect = {
  id: 'select-drop-off__time',
  label: 'Time',
  ariaLabel: 'Pick up time',
  className: 'time-container_select',
  name: 'select-pick-up',
  timeGap: 30,
}

const dropOffTimeLabel = {
  htmlfor: 'select-drop-off__time',
  labelContext: 'time',
  className: '',
}

const dropOffLocationCheckboxLabel = {
  htmlfor: 'drop-off-Location_checkbox',
  labelContext: 'Drop car off at different location',
  className: '',
}

const dropOffLocationCheckbox = {
  type: 'checkbox',
  id: 'drop-off-Location_checkbox',
  ariaLabel: 'checkbox different Location',
  checked: true,
  ariaRequired: 'true',
  className: 'input-checkbox',
  name: 'drop-off-Location_checkbox',
  autoComplete: 'off',
}

export const Labels: ILabelsContent = {
  inputPickUpLocation: {
    input: pickUpLocationInput,
    label: pickUpLocationLabel,
  },
  inputDropoffLocation: {
    input: dropOffLocationInput,
    label: dropOffLocationLabel,
  },

  datePickerPickUPDate: {
    input: pickUpDateInput,
    label: pickUpDateLabel,
  },

  datePickerDropOffDate: {
    input: dropOffDateInput,
    label: dropOffDateLabel,
  },

  selectPickUpTime: {
    label: pickUpTimeLabel,
    select: pickUpTimeSelect,
  },

  selectDropOffTime: {
    label: dropOffTimeLabel,
    select: dropOffTimeSelect,
  },

  checkboxDifferentDropoffLocation: {
    input: dropOffLocationCheckbox,
    label: dropOffLocationCheckboxLabel,
  },
}
