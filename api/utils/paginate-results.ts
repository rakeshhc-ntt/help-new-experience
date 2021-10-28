import { PageInfo } from '../generated/types'

interface PaginateArgs {
  page?: number
  perPage?: number
  first?: number
  after?: string
}

const DEFAULT_PAGE_SIZE = 10

export function paginateResults<T>(
  items: T[],
  args: PaginateArgs,
  idResolver: (T) => string
): { results: T[]; pageInfo: PageInfo } {
  let startIndex = 0
  let endIndex = DEFAULT_PAGE_SIZE
  if (args.page !== undefined || args.perPage !== undefined) {
    if (args.first || args.after) {
      throw new Error(
        'Invalid filter, page and perPage should be mixed with first and after'
      )
    }
    startIndex = (args.page || 0) * (args.perPage || DEFAULT_PAGE_SIZE)
    endIndex = startIndex + (args.perPage || DEFAULT_PAGE_SIZE)
  } else if (args.first !== undefined || args.after !== undefined) {
    startIndex = args.after
      ? items.findIndex((item) => idResolver(item) === args.after) + 1
      : 0
    endIndex = startIndex + (args.first || DEFAULT_PAGE_SIZE)
  }
  const results = items.slice(startIndex, endIndex)
  const pageInfo: PageInfo = {
    hasNextPage: !!items[endIndex + 1],
    hasPreviousPage: !!items[startIndex - 1],
    startCursor: idResolver(results[0]),
    endCursor: idResolver(results[results.length - 1]),
  }
  return { results, pageInfo }
}
