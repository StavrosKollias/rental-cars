import React from 'react'
import userEvent from '@testing-library/user-event'
import { IInputProps, Input } from './'

import * as utils from '../../../test_utils/utils'

const mockOnchangeInput = jest.fn()
const mockOnBlur = jest.fn()

const InputProps: IInputProps = {
  id: 'input-id',
  name: 'input-name',
  type: 'text',
  value: 'Manchester',
  className: 'input-class',
  ariaLabel: 'fill in the input',
  autoComplete: 'off',
  label: {
    htmlfor: 'input-name',
    labelContext: 'I am the label',
    className: 'label-class',
  },
  onBlur: mockOnBlur,
  onChange: mockOnchangeInput,
}

describe('Input', () => {
  test('Component renders with no errors', () => {
    const { getByTestId } = utils.render(<Input {...InputProps} />)
    const inputContainer = getByTestId('input-container')
    expect(inputContainer).not.toBeNull()
  })

  test('Component renders with className', () => {
    const { getByTestId } = utils.render(<Input {...InputProps} />)
    const inputContainer = getByTestId('input-container')
    expect(inputContainer.className).toBe(`input-container ${InputProps.className}`)
  })

  test('Component renders with input and correct props', () => {
    const { getByTestId, getByLabelText } = utils.render(<Input {...InputProps} />)
    const input = getByTestId('input-component') as HTMLInputElement
    expect(input).not.toBeNull()
    expect(input.value).toBe(InputProps.value)
    expect(input.className).toBe(`input-container__input ${InputProps.className}`)
    expect(input.autocomplete).toBe(InputProps.autoComplete)
    expect(input.id).toBe(InputProps.id)
    expect(input.name).toBe(InputProps.name)
    const inputArialabel = getByLabelText(InputProps.ariaLabel)
    expect(inputArialabel).not.toBeNull()
  })

  test('Component renders with a label and correct props', () => {
    const { getByTestId } = utils.render(<Input {...InputProps} />)
    const label = getByTestId('input-label') as HTMLLabelElement
    expect(label).not.toBeNull()
    expect(label.textContent).toBe(InputProps.label.labelContext)
    expect(label.className).toBe('input-container__label')
  })

  test('Input onchange triggers the onchange function', () => {
    const { getByTestId } = utils.render(<Input {...InputProps} />)
    const input = getByTestId('input-component') as HTMLInputElement
    expect(input).not.toBeNull()
    utils.fireEvent.change(input, { target: { value: 'Stockport' } })
    expect(mockOnchangeInput).toHaveBeenCalledTimes(1)
  })

  test('Input onblur triggers the onblur function', () => {
    const { getByTestId } = utils.render(<Input {...InputProps} />)
    const input = getByTestId('input-component') as HTMLInputElement
    expect(input).not.toBeNull()
    input.focus()
    userEvent.tab()
    utils.fireEvent.change(input, { target: { value: 'Stockport' } })
    expect(mockOnchangeInput).toHaveBeenCalledTimes(2)
    utils.fireEvent.click(document.body)
    expect(mockOnBlur).toHaveBeenCalledTimes(1)
  })
})
