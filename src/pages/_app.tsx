import React from 'react'

import { appAnalytics } from '@src/hooks'

function App<Props>({
  Component,
  pageProps,
}: {
  Component: React.ComponentType<Props>
  pageProps: Props
}): React.ReactElement {
  appAnalytics.usePageTracker()

  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default App
