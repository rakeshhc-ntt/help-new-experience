import React from 'react'
import { render } from '@testing-library/react'

import { App } from './app'

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<App />, {})

    expect(asFragment()).toMatchSnapshot()
  })
})
