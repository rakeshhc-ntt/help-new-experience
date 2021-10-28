import { ApolloClient } from 'apollo-client'
import { ApolloLink, Operation } from 'apollo-link'
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'
import ApolloLinkTimeout from 'apollo-link-timeout'
import { RetryLink } from 'apollo-link-retry'
import { ErrorResponse, onError } from 'apollo-link-error'
import { setContext } from 'apollo-link-context'
import { GraphQLError } from 'graphql'
import { Observable } from 'apollo-link'
import { ServerError, ServerParseError } from 'apollo-link-http-common'
import fetch from 'isomorphic-unfetch'

interface ClientOptions {
  uri: string
  getAccessToken?: () => string | Promise<string>
  refreshToken?: () => Promise<string>
  initialState?: NormalizedCacheObject
  timeout?: number | false
  retryIf?: (error: any, operation: Operation) => boolean | Promise<boolean>
  onGraphQLError?: (error: GraphQLError) => any
  onNetworkError?: (error: Error | ServerError | ServerParseError) => any
  logRequest?: (operation: Operation, duration: number) => any
}

const DEFAULT_TIMEOUT = 10000

const defaultRetryIf = (error: any, operation: Operation) => {
  const doNotRetryCodes = [500, 400]
  return !!error && !doNotRetryCodes.includes(error.statusCode)
}

export function createClient(options: ClientOptions) {
  const {
    timeout = DEFAULT_TIMEOUT,
    retryIf = defaultRetryIf,
    // onGraphQLError, // TODO
    // onNetworkError, // TODO
    logRequest,
    initialState,
    getAccessToken,
    refreshToken,
  } = options

  const links: ApolloLink[] = []

  if (logRequest) {
    const loggerLink = new ApolloLink((operation, forward) => {
      operation.setContext({ start: new Date() })
      return forward(operation).map((response) => {
        const responseTime = new Date().getTime() - operation.getContext().start
        logRequest(operation, responseTime)
        return response
      })
    })
    links.push(loggerLink)
  }

  const authLink = setContext(async ({ headers }: any) => {
    return {
      headers: {
        ...headers,
        Authorization: await getAccessToken(),
      },
    }
  })
  links.push(authLink)

  const retryLink = new RetryLink({
    delay: {
      initial: 200,
      max: 2000,
    },
    attempts: {
      max: 3,
      retryIf,
    },
  })
  links.push(retryLink)

  const errorLink = onError(
    ({ graphQLErrors, networkError, operation, forward }: ErrorResponse) => {
      if (
        graphQLErrors?.some(
          (error) => error.extensions?.code === 'UNAUTHENTICATED'
        )
      ) {
        return new Observable((observer) => {
          refreshToken()
            .then((accessToken) => {
              operation.setContext(({ headers = {} }) => ({
                headers: {
                  ...headers,
                  Authorization: accessToken,
                },
              }))
            })
            .then(() => {
              const subscriber = {
                next: observer.next.bind(observer),
                error: observer.error.bind(observer),
                complete: observer.complete.bind(observer),
              }

              // Retry last failed request
              forward(operation).subscribe(subscriber)
            })
            .catch((error) => {
              // No refresh or client token available, we force user to login
              observer.error(error)
            })
        })
      }
    }
  )
  links.push(errorLink)

  if (timeout) {
    links.push(new ApolloLinkTimeout(timeout))
  }

  links.push(createHttpLink({ uri: options.uri, fetch }))

  let cache = new InMemoryCache()
  if (initialState) {
    cache = cache.restore(initialState)
  }

  return new ApolloClient({
    link: ApolloLink.from(links),
    cache,
  })
}
