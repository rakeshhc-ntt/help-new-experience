import React, { useCallback } from 'react'
import { Stack, Text, Button } from '@btplc/ui-kit'
import { makeTestApiCall } from '../../services/api/test-api'
import SignOutButton from './signOut.button'
import LoginButton from './login.button'
import UserData from './userData'
import { useUser } from './user.provider'

// TODO: inject Auth via Provider?
function Login({ auth }) {
  const { loading, username, accessToken = null } = useUser()
  const handleTestApiCall = useCallback(async () => {
    try {
      const result = await makeTestApiCall(accessToken)
      alert(
        `Success: new activity with id "${result.data.activityId}" created.`
      )
    } catch (e) {
      alert(`Error: ${JSON.stringify(e)}`)
    }
  }, [accessToken])

  if (loading) {
    return <Text variant="body">Loading... {username}</Text>
  }

  const isLoggedIn = !!username
  return (
    <Stack space="large">
      <UserData />
      {isLoggedIn ? (
        <>
          <SignOutButton auth={auth} />
          <Button variant="default" onClick={handleTestApiCall}>
            Make test api call
          </Button>
          <Button variant="default" onClick={auth.refreshToken}>
            Refresh token
          </Button>
        </>
      ) : (
        <>
          <Text variant="body">Please, log in:</Text>
          <LoginButton auth={auth} />
        </>
      )}
    </Stack>
  )
}

export default Login
