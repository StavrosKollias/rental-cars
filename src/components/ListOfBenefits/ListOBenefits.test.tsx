import React from 'react'
import { ListOfBenefits } from './'
import * as utils from '../../test_utils/utils'

const initialProps = {
  content: ['I am one', 'I am two', 'I am three'],
}

describe('List of benefits', () => {
  test('Component renders with no error', () => {
    const { getByTestId } = utils.render(<ListOfBenefits {...initialProps} />)
    const listOfBenefitsContainer = getByTestId('list-of-benefits-container')
    expect(listOfBenefitsContainer).not.toBeNull()
  })

  test('Component renders with correct props', () => {
    const { getByTestId, getAllByTestId } = utils.render(<ListOfBenefits {...initialProps} />)
    const listOfBenefitsContainer = getByTestId('list-of-benefits-container')
    expect(listOfBenefitsContainer).not.toBeNull()
    const iconList = getAllByTestId('list-of-benefits-icon')
    expect(iconList.length).toBe(initialProps.content.length)
    const listMessages = getAllByTestId('list-of-benefits-messages')
    expect(listMessages.length).toBe(initialProps.content.length)
  })
})
