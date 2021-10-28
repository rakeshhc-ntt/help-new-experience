import { getComments } from './mock'

function comments() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getComments())
    }, 1000)
  })
}

export const commentsQueries = {
  comments,
}
