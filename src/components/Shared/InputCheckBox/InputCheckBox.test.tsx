import React from 'react'
import { IInputCheckBoxProps, InputCheckBox } from './'
import * as utils from '../../../test_utils/utils'

const mockOnchangeInput = jest.fn()

const InputProps: IInputCheckBoxProps = {
  id: 'input-id',
  name: 'input-name',
  type: 'checkbox',
  value: 'Manchester',
  className: 'input-class',
  ariaLabel: 'fill in the input',
  autoComplete: 'off',
  checked: false,
  label: {
    htmlfor: 'input-name',
    labelContext: 'I am the label',
    className: 'label-class',
  },
  onChange: mockOnchangeInput,
}

describe('Input CheckBox', () => {
  test('Component renders with no errors', () => {
    const { getByTestId } = utils.render(<InputCheckBox {...InputProps} />)
    const inputContainer = getByTestId('input-container')
    expect(inputContainer).not.toBeNull()
  })

  test('Component renders with className', () => {
    const { getByTestId } = utils.render(<InputCheckBox {...InputProps} />)
    const inputContainer = getByTestId('input-container')
    expect(inputContainer.className).toBe(`${InputProps.className}-container`)
  })

  test('Component renders with input and correct props', () => {
    const { getByTestId, getByLabelText } = utils.render(<InputCheckBox {...InputProps} />)
    const input = getByTestId('input-component') as HTMLInputElement
    expect(input).not.toBeNull()
    expect(input.value).toBe(InputProps.value)
    expect(input.className).toBe(InputProps.className)
    expect(input.autocomplete).toBe(InputProps.autoComplete)
    expect(input.id).toBe(InputProps.id)
    expect(input.name).toBe(InputProps.name)
    const inputArialabel = getByLabelText(InputProps.ariaLabel)
    expect(inputArialabel).not.toBeNull()
  })

  test('Component renders with a label and correct props', () => {
    const { getByTestId } = utils.render(<InputCheckBox {...InputProps} />)
    const label = getByTestId('input-label') as HTMLLabelElement
    expect(label).not.toBeNull()
    expect(label.textContent).toBe(InputProps.label.labelContext)
    expect(label.className).toBe(InputProps.label.className)
  })

  test('Input onchange triggers the onchange function', () => {
    const { getByTestId } = utils.render(<InputCheckBox {...InputProps} />)
    const input = getByTestId('input-component') as HTMLInputElement
    expect(input).not.toBeNull()
    utils.fireEvent.click(input, { target: { value: 'true' } })
    expect(mockOnchangeInput).toHaveBeenCalledTimes(1)
  })
})
