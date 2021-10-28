import React from 'react'
import { Text } from '@btplc/ui-kit'
import { useUser } from './user.provider'

function UserData() {
  const { loading, username, email } = useUser()
  if (loading) {
    return <Text variant="body">Loading...</Text>
  }
  return username ? (
    <Text variant="body">
      Hello {username} {email}
    </Text>
  ) : null
}

export default UserData
