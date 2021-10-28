import { gql } from 'apollo-server-micro'

export const authenticationSchema = gql`
  extend type Query {
    loggedUser: LoggedUser
  }
  type LoggedUser {
    id: String
    username: String!
    provider: String
    email: String!
    emailVerified: Boolean!
  }
`
