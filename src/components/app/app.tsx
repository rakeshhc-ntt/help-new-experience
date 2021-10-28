import React from 'react'
import { ThemeProvider, btTheme } from '@btplc/ui-kit'

export default ({ children }) => (
  <ThemeProvider theme={btTheme}>
    <div className="main-wrapper">
      {children}
      <style jsx>{`
        .main-wrapper {
          max-width: 620px;
          margin: auto;
          margin-top: 30px;
          padding: 15px;
        }
      `}</style>
    </div>
  </ThemeProvider>
)
