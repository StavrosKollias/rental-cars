import React from 'react'
import { Banner, IBannerProps } from './'
import * as utils from '../../test_utils/utils'

describe('Banner', () => {
  test('Component renders with no error', () => {
    const { getByTestId } = utils.render(
      <Banner>
        <p>Hello</p>
      </Banner>,
    )

    const banner = getByTestId('hero-banner-component')
    expect(banner).not.toBeNull()
    expect(banner.children.length).toBe(1)
  })
})
