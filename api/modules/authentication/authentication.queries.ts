import { Context } from '../../types'
import { LoggedUser } from '../../generated/types'

function loggedUser(root: any, args: any, context: Context): LoggedUser {
  return context.loggedUser
}

export const authenticationQueries = {
  loggedUser,
}
