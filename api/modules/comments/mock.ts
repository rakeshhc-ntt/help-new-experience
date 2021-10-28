import { CreateCommentInput } from '../../generated/types'

const comments = []
let commentAutoIncrementID = 1

export const createComment = (comment: CreateCommentInput) => {
  const createdComment = {
    ...comment,
    id: `${commentAutoIncrementID++}`,
  }
  comments.push(createdComment)
  return createdComment
}

export const getComments = () => comments

createComment({
  author: 'Michal',
  rawText: 'We need some small api for example project',
})
createComment({ author: 'Michal', rawText: 'Hm?' })
createComment({ author: 'Michal', rawText: 'Done!' })
