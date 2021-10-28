import React from 'react'
import { gql } from '@btplc/apollo-client'
import { Comment_comment } from '../../services/graphql/schema'
import { Text, Card, CardContent, Avatar, Grid } from '@btplc/ui-kit'

interface Props {
  comment: Comment_comment
}

Comment.fragments = {
  comment: gql`
    fragment Comment_comment on Comment {
      id
      author
      rawText
    }
  `,
}

export function Comment(props: Props) {
  return (
    <Card data-testid="comments-item">
      <CardContent>
        <Text variant="h3">{props.comment.rawText}</Text>
        <Grid
          container
          justify="flex-end"
          alignItems="center"
          style={{ marginTop: '25px' }}
        >
          <Grid item>
            <Text variant="h4">
              Written by: {props.comment.author} {'  '}
            </Text>
          </Grid>
          <Grid item>
            <Avatar
              src={`https://api.adorable.io/avatars/40/${props.comment.author}.png`}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}
