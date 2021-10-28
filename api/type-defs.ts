import { gql } from 'apollo-server-micro'
import { commentsSchema } from './modules/comments/comments.schema'
import { authenticationSchema } from './modules/authentication/authentication.schema'
import { billingAccountsSchema } from './modules/billing-accounts/billing-accounts.schema'

const globalSchema = gql`
  scalar Date
  scalar Time
  scalar DateTime

  schema {
    query: Query
    mutation: Mutation
  }

  type Mutation {
    placeholder: Boolean
  }

  type Query {
    ping: String
  }

  type PageInfo {
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
    startCursor: String
    endCursor: String
  }
`

export const typeDefs = [
  globalSchema,
  commentsSchema,
  authenticationSchema,
  billingAccountsSchema,
]
