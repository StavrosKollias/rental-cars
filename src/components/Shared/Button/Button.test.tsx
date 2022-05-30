import React from 'react'
import { Button, IButtonProps } from './'
import * as utils from '../../../test_utils/utils'

const mockOnClick = jest.fn()

const ButtonProps: IButtonProps = {
  id: 'button-id',
  className: 'button-className',
  label: 'button label',
  ariaLabel: 'aria-label',
  title: 'button-title',
  onClick: mockOnClick,
}

describe('Button', () => {
  test('Component renders with no errors', () => {
    const { getByTestId } = utils.render(<Button {...ButtonProps} />)
    const button = getByTestId('button-component')
    expect(button).not.toBeNull()
  })

  test('Component renders with correct props', () => {
    const { getByTestId } = utils.render(<Button {...ButtonProps} />)
    const button = getByTestId('button-component')
    expect(button.className).toBe(ButtonProps.className)
    expect(button.id).toBe(ButtonProps.id)
    expect(button.textContent).toBe(ButtonProps.label)
    expect(button.title).toBe(ButtonProps.title)
  })

  test('When user clicks fires onClick function', () => {
    const { getByTestId } = utils.render(<Button {...ButtonProps} />)
    const button = getByTestId('button-component')
    utils.fireEvent.click(button)
    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })
})
