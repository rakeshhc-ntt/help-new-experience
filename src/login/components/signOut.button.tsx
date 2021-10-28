import React from 'react'
import { Button } from '@btplc/ui-kit'

export default function SignOutButton({ auth }) {
  return (
    <Button variant="default" onClick={() => auth.signOut()}>
      Sign Out
    </Button>
  )
}
