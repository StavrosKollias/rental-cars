import React from 'react'
import * as utils from '../../../test_utils/utils'
import { Select, ISelectProps } from '.'

const mockOnchange = jest.fn()
const SelectProps: ISelectProps = {
  id: 'select-id',
  value: '11:00',
  className: 'select-class',
  options: ['10:00', '11:00', '12:00', '13:00'],
  name: 'select-name',
  ariaLabel: 'Select time',
  label: {
    htmlfor: 'select-is',
    labelContext: 'I am the label',
    className: 'label-class',
  },
  onChange: mockOnchange,
}

describe('Select Component', () => {
  test('Component renders with no errors', () => {
    const { getByTestId } = utils.render(<Select {...SelectProps} />)
    const selectContainer = getByTestId('select-container')
    expect(selectContainer).not.toBeNull()
    const select = getByTestId('select-component')
    expect(select).not.toBeNull()
  })

  test('Component renders with correct props', () => {
    const { getByTestId } = utils.render(<Select {...SelectProps} />)
    const selectContainer = getByTestId('select-container')
    expect(selectContainer.className).toBe(`select-container ${SelectProps.className}`)
  })

  test('Component Renders with Select and correct props', () => {
    const { getByTestId, getByLabelText } = utils.render(<Select {...SelectProps} />)
    const select = getByTestId('select-component') as HTMLSelectElement
    expect(select.id).toBe(SelectProps.id)
    expect(select.value).toBe(SelectProps.value)
    expect(select.name).toBe(SelectProps.name)
    expect(select.className).toBe(`select-container__select ${SelectProps.className}`)
    const selectByLabel = getByLabelText(SelectProps.ariaLabel)
    expect(selectByLabel).not.toBeNull()
  })

  test('Component renders with a label and correct props', () => {
    const { getByTestId } = utils.render(<Select {...SelectProps} />)
    const label = getByTestId('input-label') as HTMLLabelElement
    expect(label).not.toBeNull()
    expect(label.textContent).toBe(SelectProps.label.labelContext)
    expect(label.className).toBe('select-container__label')
  })

  test('Component renders 4 options', () => {
    const { getAllByTestId } = utils.render(<Select {...SelectProps} />)
    const options = getAllByTestId('select-option')
    expect(options.length).toBe(4)
    expect(options[0].textContent).toBe(SelectProps.options[0])
    expect(options[1].textContent).toBe(SelectProps.options[1])
    expect(options[2].textContent).toBe(SelectProps.options[2])
    expect(options[3].textContent).toBe(SelectProps.options[3])
  })

  test('Onchange function triggers', () => {
    const { getByTestId } = utils.render(<Select {...SelectProps} />)
    const select = getByTestId('select-component') as HTMLSelectElement
    utils.fireEvent.change(select, { target: { value: '12:00' } })
    expect(mockOnchange).toHaveBeenCalledTimes(1)
  })
})
