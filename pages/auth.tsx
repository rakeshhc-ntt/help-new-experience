import React, { useEffect, useState } from 'react'
import {
  createClient,
  ApolloProvider,
  gql,
  useQuery,
} from './../src/services/apollo-client'
import App from '../src/components/app/app'
import Head from 'next/head'
import { Stack } from '@btplc/ui-kit'
import Header from '../src/components/Header'
import { createAuth } from '@btplc/auth'

const auth = createAuth({
  provider: 'EEID',
  type: 'code',
  scope: 'openid',
  clientId: 'NjngY0Zr4NU8AjPxT4LHdp0AsdjoX15V',
  redirectSignIn: 'https://dbs.poc.intdigital.ee.co.uk/auth',
  domain: 'https://api-test1.ee.co.uk/v1/identity',
  corsDomain: '/api/auth',
  acrValues: 'L2',
})

const client = createClient({
  uri: '/api/graphql',
  getAccessToken: auth.getAccessToken,
  refreshToken: auth.refreshToken,
  initialState: {},
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

  return (
    <ApolloProvider client={client}>
      <App>
        <Head>
          <title>Next.js, Apollo - EE Auth Example</title>
        </Head>
        <Stack space="large">
          <Header />
          {accessToken ? (
            <>
              <pre>
                Token:
                {accessToken}
              </pre>
              <UserData />
            </>
          ) : (
            <button onClick={() => auth.federatedSignIn('teststate')}>
              Login
            </button>
          )}
        </Stack>
      </App>
    </ApolloProvider>
  )
}

function UserData() {
  const { data, loading, error, refetch } = useQuery(gql`
    {
      loggedUser {
        email
      }
      billingAccounts {
        accountNumber
        payments {
          id
        }
        bills {
          invoiceNo
          billAmountGbp
          paymentDueDate
        }
      }
    }
  `)
  if (loading) {
    return <p>Loading...</p>
  }
  return (
    <>
      <button onClick={() => refetch()}>refresh data</button>
      <pre>
        {error ? 'Error' : 'Data'}:{JSON.stringify(error || data, undefined, 2)}
      </pre>
    </>
  )
}
