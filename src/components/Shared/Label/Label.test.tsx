import React from 'react'
import { ILabelProps, Label } from './'
import * as utils from '../../../test_utils/utils'

const LabelProps: ILabelProps = {
  htmlfor: 'input',
  className: 'label-class',
  labelContext: 'i am a label',
}

describe('Label component', () => {
  test('Component renders with no error and correct props', () => {
    const { getByText } = utils.renderComponent(<Label {...LabelProps} />)
    const label = getByText(LabelProps.labelContext) as HTMLLabelElement
    expect(label).not.toBeNull()
    expect(label.className).toBe(LabelProps.className)
  })
})
