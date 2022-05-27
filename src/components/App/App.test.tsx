import React from 'react'
import { App } from './'
import * as utils from '../../test_utils/utils'

describe('App testing', () => {
  test('Component Renders with no error', () => {
    const { getByTestId } = utils.renderComponent(<App />)
    const app = getByTestId('app')
    expect(app).not.toBeNull()
  })
})
