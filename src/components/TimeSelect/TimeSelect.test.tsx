import React from 'react'
import { TimeSelect } from './'
import * as utils from '../../test_utils/utils'
import { Labels } from '../../constants/Labels'
import * as utilFunctions from '../../utils'

const mockOnchange = jest.fn()

const TimeSelectProps = {
  selectedTime: '00:30',
  setTime: mockOnchange,
  content: Labels.selectPickUpTime,
}

describe('Time Select Component', () => {
  test('Component renders with no error', () => {
    const { getByTestId } = utils.render(<TimeSelect {...TimeSelectProps} />)
    const timeSelect = getByTestId('time-select-container')
    expect(timeSelect).not.toBeNull()
  })

  test('Component renders with Clock Icon', () => {
    const { getByTestId } = utils.render(<TimeSelect {...TimeSelectProps} />)
    const clockIcon = getByTestId('clock-icon-container')
    expect(clockIcon).not.toBeNull()
    expect(clockIcon).not.toBeNull()
    expect(clockIcon.children.length).toBe(1)
  })

  test('Component renders with a label and correct props', () => {
    const { getByTestId } = utils.render(<TimeSelect {...TimeSelectProps} />)
    const label = getByTestId('input-label') as HTMLLabelElement
    expect(label).not.toBeNull()
    expect(label.textContent).toBe(TimeSelectProps.content.label.labelContext)
    expect(label.className).toBe(TimeSelectProps.content.label.className)
  })

  test('Component  renders with  Select and correct props', () => {
    const { getByTestId, getByLabelText } = utils.render(<TimeSelect {...TimeSelectProps} />)
    const selectContainer = getByTestId('select-container')
    expect(selectContainer).not.toBeNull()
    const select = getByTestId('select-component') as HTMLSelectElement
    expect(select.id).toBe(TimeSelectProps.content.select.id)
    expect(select.value).toBe(TimeSelectProps.selectedTime)
    expect(select.name).toBe(TimeSelectProps.content.select.name)
    expect(select.className).toBe(TimeSelectProps.content.select.className)
    const selectByLabel = getByLabelText(TimeSelectProps.content.select.ariaLabel)
    expect(selectByLabel).not.toBeNull()
  })

  test('Component  renders with  Select and has 48 options', () => {
    const { getAllByTestId } = utils.render(<TimeSelect {...TimeSelectProps} />)
    const times = utilFunctions.getTimesArray(TimeSelectProps.content.select.timeGap)
    const options = getAllByTestId('select-option')
    expect(options.length).toBe(48)
    expect(options[0].textContent).toBe(times[0])
    expect(options[1].textContent).toBe(times[1])
    expect(options[2].textContent).toBe(times[2])
    expect(options[3].textContent).toBe(times[3])
  })
})
