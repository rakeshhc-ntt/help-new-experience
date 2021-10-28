import { createComment as createCommentMock } from './mock'
import {
  CreateCommentResult,
  MutationCreateCommentArgs,
} from '../../generated/types'

function createComment(
  parent: any,
  args: MutationCreateCommentArgs
): CreateCommentResult {
  const createdComment = createCommentMock(args.input)
  return { createdComment }
}

export const commentsMutations = {
  createComment,
}
