import React from 'react'
import { useQuery, gql } from '@btplc/apollo-client'
import { Stack, Text, Divider } from '@btplc/ui-kit'
import { CommentList } from '../comment-list/comment-list'
import { CommentsQuery } from '../../services/graphql/schema'
import App from './../app/app'
import Header from '../Header'
import { CreateComment } from '../create-comment/create-comment'
import Head from 'next/head'
import { Alert, AlertTitle } from '@material-ui/lab'
import { useRouter } from 'next/router'

export const COMMENTS_PAGE_QUERY = gql`
  query CommentsQuery {
    ...CommentList_query
  }
  ${(CommentList as any).fragments.query}
`
export default function CommentsPage(props) {
  const router = useRouter()

  const { loading, error, data } = useQuery<CommentsQuery>(
    COMMENTS_PAGE_QUERY,
    {
      notifyOnNetworkStatusChange: true,
    }
  )

  if (error) {
    return <Text color="error">Error loading comments.</Text>
  }

  return (
    <App>
      <Head>
        <title>Next.js, Apollo - Example</title>
      </Head>
      <Stack space="large">
        <Divider />
        <Header />
        <Divider />
        <Alert severity="warning">
          <AlertTitle>Warning</AlertTitle>
          For demostration purposes comments backend query was delayed for two
          seconds
        </Alert>
        {router.pathname === '/ssr-enabled' ? (
          <Alert severity="info">
            <AlertTitle>SSR</AlertTitle>
            Example delays first render for two seconds to fetch comments before
            showing page.
          </Alert>
        ) : (
          <Alert severity="info">
            <AlertTitle>SSR Disabled</AlertTitle>
            First render is almost instant, comments are queried client side.
          </Alert>
        )}
        <Text variant="h2" data-testid="comments-title">
          Comments:
        </Text>
        {!loading ? (
          <CommentList query={data} />
        ) : (
          <Text align="center" data-testid="comments-loading">
            <span role="img" aria-label="hourglass">
              ⌛
            </span>{' '}
            Loading Comments..
          </Text>
        )}
        <Divider />
        <CreateComment />
        <Divider />
        <Text variant="notes">Build nr: {process.env.BUILD_NUMBER}</Text>
      </Stack>
    </App>
  )
}
