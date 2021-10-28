export type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Date: any
  Time: any
  DateTime: any
}

export type Comment = {
  __typename?: 'Comment'
  id: Scalars['ID']
  author: Scalars['String']
  rawText: Scalars['String']
}

export type CreateCommentInput = {
  author: Scalars['String']
  rawText: Scalars['String']
}

export type CreateCommentResult = {
  __typename?: 'CreateCommentResult'
  createdComment: Comment
}

export type LoggedUser = {
  __typename?: 'LoggedUser'
  id?: Maybe<Scalars['String']>
  username: Scalars['String']
  provider?: Maybe<Scalars['String']>
  email: Scalars['String']
  emailVerified: Scalars['Boolean']
}

export type Mutation = {
  __typename?: 'Mutation'
  createComment?: Maybe<CreateCommentResult>
  placeholder?: Maybe<Scalars['Boolean']>
}

export type MutationCreateCommentArgs = {
  input?: Maybe<CreateCommentInput>
}

export type PageInfo = {
  __typename?: 'PageInfo'
  hasNextPage: Scalars['Boolean']
  hasPreviousPage: Scalars['Boolean']
  startCursor?: Maybe<Scalars['String']>
  endCursor?: Maybe<Scalars['String']>
}

export type Query = {
  __typename?: 'Query'
  comments: Array<Comment>
  loggedUser?: Maybe<LoggedUser>
  ping?: Maybe<Scalars['String']>
}
