import React, { useEffect, useState } from 'react'
import { Stack, Divider } from '@btplc/ui-kit'
import App from '../src/components/app/app'
import Head from 'next/head'
import Header from '../src/components/Header'
import { createAuth } from '@btplc/auth'
import { Login } from '../src/login/index'
import UserProvider from '../src/login/components/user.provider'

const baseUrl =
  process.env.BASE_URL ||
  'https://staging-bt-group-next-apollo-example-btplc.ps.intdigital.ee.co.uk'

const auth = createAuth({
  provider: 'BT_Cognito',
  type: 'code',
  scope: 'openid', // ['email', 'openid', 'aws.cognito.signin.user.admin']'',
  clientId: '7gqijt2tu8db7quk0r85o3h87m', // userPoolWebClientId
  redirectSignIn: `${baseUrl}/bt-auth`,
  redirectSignOut: `${baseUrl}/bt-auth`,
  domain: `https://ideal-oj-ref.auth.eu-west-1.amazoncognito.com`,
  identityProvider: 'Google',
})

export default function AuthPage() {
  const [accessToken, setAccessToken] = useState<string | null>()
  useEffect(() => {
    return auth.subscribe((event) => {
      console.log(event)
      switch (event.type) {
        case 'initial':
        case 'signIn':
        case 'tokensRefresh':
        case 'tokensRestore':
          setAccessToken(event.accessToken)
          break
        default:
          setAccessToken(null)
      }
    })
  }, [setAccessToken])

  if (typeof accessToken === 'undefined') {
    return 'Loading...'
  }

  console.log('---accessToken mains', accessToken)
  return (
    <App>
      <Head>
        <title>Next.js, Apollo - Welcome</title>
      </Head>
      <UserProvider accessToken={accessToken}>
        <Stack space="large">
          <Header />
          <Divider />
          <Login auth={auth} />
        </Stack>
      </UserProvider>
    </App>
  )
}
