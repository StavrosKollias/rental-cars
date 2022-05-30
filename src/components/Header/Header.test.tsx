import React from 'react'
import { Header } from './'
import * as utils from '../../test_utils/utils'

describe('Header', () => {
  test('Component renders with no errors', () => {
    const { getByTestId } = utils.render(<Header />)
    const header = getByTestId('header-component')
    expect(header).not.toBeNull()
  })

  test('Component renders with logo c', () => {
    const { getByTestId } = utils.render(<Header />)
    const logoContainer = getByTestId('logo-container')
    expect(logoContainer).not.toBeNull()
    expect(logoContainer.children.length).toBe(1)
  })
})
