import { gql } from "apollo-server-express"

export const typeDefs = gql`
    type Query {
        stocks: [Stocks!]!
    }

    type Stocks {
        id: ID!
        date: String
        amount: String
    }

    type Mutation {
        createStock(date: String, amount: String): Stocks!
    }
`

