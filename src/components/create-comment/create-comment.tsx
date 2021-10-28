import React from 'react'
import { useMutation, gql } from '@btplc/apollo-client'
import { Button, Input, Text, Grid, Form } from '@btplc/ui-kit'
import {
  CommentsQuery,
  CreateCommentMutation,
  CreateCommentMutationVariables,
} from '../../services/graphql/schema'
import { COMMENTS_PAGE_QUERY } from '../comment-page/comment-page'

const CREATE_POST_MUTATION = gql`
  mutation CreateCommentMutation($input: CreateCommentInput) {
    __typename
    createComment(input: $input) {
      __typename
      createdComment {
        id
        author
        rawText
      }
    }
  }
`

export function CreateComment() {
  const [createComment, { loading }] = useMutation<
    CreateCommentMutation,
    CreateCommentMutationVariables
  >(CREATE_POST_MUTATION)
  return (
    <Form
      initialValues={{
        author: '',
        rawText: '',
      }}
      onSubmit={async (values) => {
        const { author, rawText } = values

        createComment({
          variables: { input: { author, rawText } },
          update: (proxy, { data }) => {
            const query = proxy.readQuery<CommentsQuery>({
              query: COMMENTS_PAGE_QUERY,
            })
            // Update the cache with the new post at the top of the
            proxy.writeQuery({
              query: COMMENTS_PAGE_QUERY,
              data: {
                ...data,
                comments: [
                  ...query.comments,
                  data.createComment.createdComment,
                ],
              },
            })
          },
        })
      }}
    >
      {(props) => {
        const {
          values,
          // touched,
          // errors,
          // dirty,
          isSubmitting,
          handleChange,
          handleSubmit,
        } = props
        return (
          <form onSubmit={handleSubmit} data-analytics-region="Create comment">
            <Grid
              container
              direction="column"
              alignContent="center"
              spacing={3}
            >
              <Grid item>
                <Text variant="h2">Add New Comment:</Text>
              </Grid>
              <Grid item>
                <Input
                  label="Author"
                  onChange={handleChange}
                  value={values.author}
                  placeholder="Fill your name"
                  id="author"
                  required
                />
              </Grid>
              <Grid item>
                <Input
                  label="Text"
                  onChange={handleChange}
                  value={values.rawText}
                  placeholder="Write comment you want to add"
                  id="rawText"
                  required
                />
              </Grid>
              <Grid item>
                <Button
                  variant="primary"
                  type="submit"
                  disabled={isSubmitting || loading}
                  analyticsLabel="Submit"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        )
      }}
    </Form>
  )
}
