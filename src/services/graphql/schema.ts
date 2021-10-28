/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CommentsQuery
// ====================================================

export interface CommentsQuery_comments {
  __typename: 'Comment'
  id: string
  author: string
  rawText: string
}

export interface CommentsQuery {
  __typename: 'Query'
  comments: CommentsQuery_comments[]
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateCommentMutation
// ====================================================

export interface CreateCommentMutation_createComment_createdComment {
  __typename: 'Comment'
  id: string
  author: string
  rawText: string
}

export interface CreateCommentMutation_createComment {
  __typename: 'CreateCommentResult'
  createdComment: CreateCommentMutation_createComment_createdComment
}

export interface CreateCommentMutation {
  createComment: CreateCommentMutation_createComment | null
}

export interface CreateCommentMutationVariables {
  input?: CreateCommentInput | null
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CommentList_query
// ====================================================

export interface CommentList_query_comments {
  __typename: 'Comment'
  id: string
  author: string
  rawText: string
}

export interface CommentList_query {
  __typename: 'Query'
  comments: CommentList_query_comments[]
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Comment_comment
// ====================================================

export interface Comment_comment {
  __typename: 'Comment'
  id: string
  author: string
  rawText: string
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface CreateCommentInput {
  author: string
  rawText: string
}

//==============================================================
// END Enums and Input Objects
//==============================================================
