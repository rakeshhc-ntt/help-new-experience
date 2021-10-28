import axios from 'axios'
import { AuthenticationError } from 'apollo-server-micro'

export interface AuthenticatedUser {
  id?: string
  username: string
  provider?: string
  email: string
  emailVerified: boolean
}

export async function getSelf(accessToken): Promise<any> {
  const client = axios.create({
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'APIGW-Tracking-Header': 'michal',
      'X-EE-API-Originator': 'michaltest',
    },
  })
  try {
    const { data } = await client.get(
      'https://api-test1.ee.co.uk/digital/v1/person-identities/self'
    )
    return {
      loggedUser: {
        ...data,
        id: '???',
        username: data.email,
        emailVerified: data.isEmailVerified,
        provider: 'EEID',
      },
      axiosClient: client,
    }
  } catch (e) {
    const { response } = e
    throw new AuthenticationError(response.data.message)
  }
}
