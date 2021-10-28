import React, {
  useEffect,
  useState,
  useCallback,
  createContext,
  useContext,
} from 'react'
import axios from 'axios'

const UserContext = createContext({
  loading: true,
  username: '',
  email: '',
  accessToken: null,
})

export function useUser() {
  return useContext(UserContext)
}

export const withUser = (Component) => (props) => (
  <UserContext.Consumer>
    {(context) => <Component {...props} {...context} />}
  </UserContext.Consumer>
)

export default function UserProvider({ children, accessToken }) {
  const [user, setState] = useState({
    loading: false,
    email: '',
    username: '',
    accessToken: null,
  })

  const fetchUser = useCallback(async () => {
    if (!accessToken) return null
    try {
      const result = await axios.request({
        // TODO: move this to GraphQL but first configure grapqhl client
        // See comments on the bottom
        baseURL: 'https://ideal-oj-ref.auth.eu-west-1.amazoncognito.com',
        url: `/oauth2/userInfo`,
        method: 'GET',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          Authorization: `Bearer ${accessToken}`,
        },
      })
      console.log('--result-', result)

      const {
        data: { email, username },
      } = result
      setState({ loading: false, username, email, accessToken })
    } catch (e) {
      console.log(e)
    }
  }, [accessToken])

  useEffect(() => {
    fetchUser()
  }, [accessToken, fetchUser])

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}

//
// import {
//   gql,
//   useQuery,
// } from './../src/services/apollo-client'
//
// function UserData() {
//   const { data, loading, error, refetch } = useQuery(gql`
//       {
//           loggedUser {
//               email
//           }
//       }
//   `)
//   if (loading) {
//     return <p>Loading...</p>
//   }
//   return (
//     <>
//       <button onClick={() => refetch()}>refresh data</button>
//       <pre>
//         {error ? 'Error' : 'Data'}:{JSON.stringify(error || data, undefined, 2)}
//       </pre>
//     </>
//   )
// }
