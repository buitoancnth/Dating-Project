// Import
import { GraphQLObjectType } from 'graphql'

// App imports
import * as user from '../..modules/user/queries'

// Query
const query = new GraphQLObjectType({
    name: 'Query',
    description: 'API Queries [read]',

    fields: () => ({
        ...user
    })
})

export default query
