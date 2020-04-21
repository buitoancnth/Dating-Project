// Import
import { GraphQLObjectType } from 'graphql'

// App imports
import * as user from '../..modules/user/mutations'

// Mutations
const mutation = new GraphQLObjectType({
    name: 'Mutations',
    description: 'API Mutations [Create, Update, Delete]',

    fields: () => ({
        ...user
    })
})

export default mutation
