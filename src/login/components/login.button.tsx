import React from 'react'
import { Button } from '@btplc/ui-kit'

export default function LoginButton({ auth }) {
  return (
    <div>
      <Button
        variant="default"
        onClick={() =>
          auth.federatedSignIn({
            customProvider: 'Google',
          })
        }
      >
        Open Google
      </Button>
      <Button
        variant="default"
        onClick={() =>
          auth.federatedSignIn({ customProvider: 'Siteminder-Test' })
        }
      >
        Open Siteminder
      </Button>
    </div>
  )
}
