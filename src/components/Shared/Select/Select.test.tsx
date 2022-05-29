import React from 'react'
import * as utils from '../../../test_utils/utils'
import { Select, ISelectProps } from '.'

const mockOnchange = jest.fn()
const selectProps: ISelectProps = {
  id: 'select-id',
  value: '11:00',
  className: 'select-class',
  options: ['10:00', '11:00', '12:00', '13:00'],
  label: 'Select-label',
  onChange: mockOnchange,
}

describe('Select Component', () => {
  test('Component renders with no errors', () => {
    const { getByTestId } = utils.render(<Select {...selectProps} />)
    const select = getByTestId('select-component')
    expect(select).not.toBeNull()
  })

  test('Component renders with correct props', () => {
    const { getByTestId, getByLabelText } = utils.render(<Select {...selectProps} />)
    const select = getByTestId('select-component') as HTMLSelectElement
    expect(select.id).toBe(selectProps.id)
    expect(select.value).toBe(selectProps.value)
    expect(select.name).toBe(selectProps.label)
    const selectByLabel = getByLabelText(selectProps.label)
    expect(selectByLabel).not.toBeNull()
  })

  test('Component renders 4 options', () => {
    const { getAllByTestId } = utils.render(<Select {...selectProps} />)
    const options = getAllByTestId('select-option')
    expect(options.length).toBe(4)
    expect(options[0].textContent).toBe(selectProps.options[0])
    expect(options[1].textContent).toBe(selectProps.options[1])
    expect(options[2].textContent).toBe(selectProps.options[2])
    expect(options[3].textContent).toBe(selectProps.options[3])
  })

  test('Onchange function triggers', () => {
    const { getByTestId } = utils.render(<Select {...selectProps} />)
    const select = getByTestId('select-component') as HTMLSelectElement
    utils.fireEvent.change(select, { target: { value: '12:00' } })
    expect(mockOnchange).toHaveBeenCalledTimes(1)
  })
})
