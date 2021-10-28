import React from 'react'

import { usePageTracker } from '../src/hooks/analytics/analytics'

function App({ Component, pageProps }) {
  usePageTracker()

  return <Component {...pageProps} />
}

export default App
