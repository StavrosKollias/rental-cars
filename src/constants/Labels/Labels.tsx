import { ILabelsContent } from './'
enum pickUpLocationLabel {
  htmlfor = 'search-pickUp-location__input',
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

enum pickUpTimeSelect {
  id = 'select-pick-up__time',
  label = 'Time',
  ariaLabel = 'Pick up time',
  className = 'time-container_select',
  name = 'select-pick-up__time',
  timeGap = 30,
}

enum pickUpTimeLabel {
  htmlfor = 'select-pick-up__time',
  labelContext = 'Time',
  className = '',
}

enum dropOffTimeSelect {
  id = 'select-drop-off__time',
  label = 'Time',
  ariaLabel = 'Pick up time',
  className = 'time-container_select',
  name = 'select-pick-up',
  timeGap = 30,
}

enum dropOffTimeLabel {
  htmlfor = 'select-drop-off__time',
  labelContext = 'time',
  className = '',
}

export const Labels: ILabelsContent = {
  inputPickUpLocation: {
    input: pickUpLocationInput,
    label: pickUpLocationLabel,
  },

  inputDropoffLocation: {
    input: pickUpLocationInput,
    label: pickUpLocationLabel,
  },

  selectPickUpTime: {
    label: pickUpTimeLabel,
    select: pickUpTimeSelect,
  },

  selectDropOffTime: {
    label: dropOffTimeLabel,
    select: dropOffTimeSelect,
  },
}
