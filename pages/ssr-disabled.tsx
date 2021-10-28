import { withApollo } from '../src/services/graphql/apollo'
import CommentsPage from '../src/components/comment-page/comment-page'

export default withApollo()(CommentsPage)
