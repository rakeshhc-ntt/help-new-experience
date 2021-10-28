import React from 'react'
import { render } from '@testing-library/react'
import App from './app'

it('matches snapshot', () => {
  const { asFragment } = render(
    <App>
      <h1>Hello World</h1>
    </App>
  )
  expect(asFragment()).toMatchSnapshot()
})
