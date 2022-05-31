import { ILabelsContent } from '.'

const pickUpLocationLabel = {
  htmlfor: 'search-pickUp-location__input',
  labelContext: 'Pick-up Location',
}

const pickUpLocationInput = {
  type: 'text',
  id: 'search-pickUp-location__input',
  ariaLabel: 'Pick-up Location',
  ariaRequired: 'true',
  name: 'search-pickUp-location__input',
  autoComplete: 'off',
}

const dropOffLocationLabel = {
  htmlfor: 'search-dropOff-location__input',
  labelContext: 'Drop-off location',
}

const dropOffLocationInput = {
  type: 'text',
  id: 'search-dropOff-location__input',
  ariaLabel: 'Drop-off Location',
  ariaRequired: 'true',
  name: 'Drop-off Location',
  autoComplete: 'off',
}

const dropOffDateLabel = {
  htmlfor: 'date-dropOff__input',
  labelContext: 'Drop-off Date',
}

const dropOffDateInput = {
  type: 'date',
  id: 'date-dropOff__input',
  ariaLabel: 'Drop-off Date',
  ariaRequired: 'true',
  name: 'Drop-off Date',
  autoComplete: 'off',
}

const pickUpDateLabel = {
  htmlfor: 'date-pickUp__input',
  labelContext: 'Pick-up Date',
}

const pickUpDateInput = {
  type: 'date',
  id: 'date-pickUp__input',
  ariaLabel: 'Pick-up Date',
  ariaRequired: 'true',
  name: 'Pick-up-date',
  autoComplete: 'off',
}

const pickUpTimeSelect = {
  id: 'select-pick-up__time',
  label: 'Time',
  ariaLabel: 'Pick-up Time',
  name: 'select-pick-up__time',
  timeGap: 30,
}

const pickUpTimeLabel = {
  htmlfor: 'select-pick-up__time',
  labelContext: 'Time',
}

const dropOffTimeSelect = {
  id: 'select-drop-off__time',
  label: 'Time',
  ariaLabel: 'Drop-off Time',
  name: 'select-drop-off__time',
  timeGap: 30,
}

const dropOffTimeLabel = {
  htmlfor: 'select-drop-off__time',
  labelContext: 'Time',
}

const dropOffLocationCheckboxLabel = {
  htmlfor: 'drop-off-Location_checkbox',
  labelContext: 'Drop car off at different location',
}

const dropOffLocationCheckbox = {
  type: 'checkbox',
  id: 'drop-off-Location_checkbox',
  ariaLabel: 'Checkbox different Location select',
  checked: true,
  ariaRequired: 'true',
  className: 'input-checkbox',
  name: 'drop-off-Location_checkbox',
  autoComplete: 'off',
}

const pageContnet = {
  title: 'Car Hire – Search, Compare & Save',
  benefits: ['Free cancellations on most bookings', '60,000+ locations', 'Customer support in 40+ languages'],
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
  pageContnet: pageContnet,
}
