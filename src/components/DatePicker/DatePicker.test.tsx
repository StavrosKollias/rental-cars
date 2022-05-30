import React from 'react'
import { DatePicker, IDatePickerProps } from './'
import * as utils from '../../test_utils/utils'
import { Labels } from '../../constants/Labels'

const mockSetSelectedDate = jest.fn()

const DatePickerProps: IDatePickerProps = {
  selectedDate: '01/02/2021',
  setSelectedDate: mockSetSelectedDate,
  content: Labels.datePickerPickUPDate,
}

describe('DatePicker', () => {
  test('Component renders with no errors', () => {
    const { getByTestId } = utils.render(<DatePicker {...DatePickerProps} />)
    const datePickerContainer = getByTestId('date-picker')
    expect(datePickerContainer).not.toBeNull()
  })

  test('Component renders with input and label', () => {
    const { getByTestId } = utils.render(<DatePicker {...DatePickerProps} />)
    const input = getByTestId('input-component')
    expect(input).not.toBeNull()
    const label = getByTestId('input-label')
    expect(label).not.toBeNull()
  })

  test('Component renders with a search Icon', () => {
    const { getByTestId } = utils.render(<DatePicker {...DatePickerProps} />)
    const searchIconContainer = getByTestId('date-icon-container')
    expect(searchIconContainer).not.toBeNull()
    expect(searchIconContainer.children.length).toBe(1)
  })

  test('Input change fires event', () => {
    const { getByTestId } = utils.render(<DatePicker {...DatePickerProps} />)
    const input = getByTestId('input-component') as HTMLInputElement
    expect(input.value).toBe('')
    utils.fireEvent.change(input, { target: { value: '13/02/2021' } })
    expect(mockSetSelectedDate).toHaveBeenCalledTimes(1)
  })
})
