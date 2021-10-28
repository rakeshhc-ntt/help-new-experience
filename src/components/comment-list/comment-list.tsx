import React from 'react'
import { gql } from '@btplc/apollo-client'
import { Comment } from './../comment/comment'
import { CommentList_query } from '../../services/graphql/schema'
import { Stack } from '@btplc/ui-kit'

interface Props {
  query: CommentList_query
}

CommentList.fragments = {
  query: gql`
    fragment CommentList_query on Query {
      comments {
        id
        ...Comment_comment
      }
    }
    ${(Comment as any).fragments.comment}
  `,
}

export function CommentList(props: Props) {
  return (
    <Stack space="medium">
      {props.query.comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </Stack>
  )
}
