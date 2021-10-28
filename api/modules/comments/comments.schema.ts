import { gql } from 'apollo-server-micro'

export const commentsSchema = gql`
  extend type Query {
    comments: [Comment!]!
  }
  extend type Mutation {
    createComment(input: CreateCommentInput): CreateCommentResult
  }
  type Comment {
    id: ID!
    author: String!
    rawText: String!
  }
  input CreateCommentInput {
    author: String!
    rawText: String!
  }
  type CreateCommentResult {
    createdComment: Comment!
  }
`
