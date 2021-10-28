import { GraphQLDate, GraphQLTime, GraphQLDateTime } from 'graphql-iso-date'

import { commentsQueries } from './modules/comments/comments.queries'
import { commentsMutations } from './modules/comments/comments.mutations'
import { authenticationQueries } from './modules/authentication/authentication.queries'
import {
  BillingAccount,
  billingAccountsQueries,
} from './modules/billing-accounts/billing-accounts.queries'

export const resolvers = {
  Query: {
    ...commentsQueries,
    ...authenticationQueries,
    ...billingAccountsQueries,
    ping: () => 'pong',
  },
  Mutation: {
    ...commentsMutations,
    placeholder: () => true,
  },
  BillingAccount,
  Date: GraphQLDate,
  Time: GraphQLTime,
  DateTime: GraphQLDateTime,
}
