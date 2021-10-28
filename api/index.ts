import Cors from 'micro-cors'
import { ApolloServer } from 'apollo-server-micro'
import { typeDefs } from './type-defs'
import { resolvers } from './resolvers'
import { dataLoaders } from './data-loaders'
import createServices from '@btplc/service-catalog'
import { Context } from './types'
import { getSelf } from './utils/authentication'
import axios from 'axios'

const cors = Cors({
  allowedMethods: ['GET', 'POST', 'OPTIONS'],
})

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
  context: async ({ req }): Promise<Context> => {
    const { authorization } = req.headers
    const { loggedUser, axiosClient } = authorization
      ? await getSelf(authorization)
      : { loggedUser: null, axiosClient: axios.create() }
    const services = createServices(authorization)
    return {
      authorization: req.headers.authorization,
      dataLoaders: dataLoaders(services),
      services,
      loggedUser,
      axiosClient,
    }
  },
})

export const config = {
  api: {
    bodyParser: false,
  },
}

export const serverHandler = cors((req, res) => {
  if (req.method === 'OPTIONS') {
    res.end()
    return
  }
  return apolloServer.createHandler({ path: '/api/graphql' })(req, res)
})
