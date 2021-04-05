import { gql } from "apollo-server-express"

export const typeDefs = gql`
    type Query {
        snapshot: [Snapshot!]!
        isa: [Isa!]!
        cash: [Cash!]!
        crypto: [Crypto!]!
        getIsa(_id: ID!): Isa!
    }

    type Isa {
        stocks: Float
        commodities: Float
        bonds: Float
        cash: Float
    }

    type Cash {
        krakenGBP: Float
        krakenUSDT: Float
        krakenUSDC: Float
        celsiusUSDT: Float
        celsiusUSDC: Float
        blockfiUSDT: Float
        blockfiUSDC: Float
        spainEURO: Float
    }

    type Crypto {
        bitcoin: Float
        ether: Float
        altcoins: Float
    }

    input IsaInput {
        stocks: Float
        commodities: Float
        bonds: Float
        cash: Float
    }

    input CashInput {
        krakenGBP: Float
        krakenUSDT: Float
        krakenUSDC: Float
        celsiusUSDT: Float
        celsiusUSDC: Float
        blockfiUSDT: Float
        blockfiUSDC: Float
        spainEURO: Float
    }

    input CryptoInput {
        bitcoin: Float
        ether: Float
        altcoins: Float
    }

    type Snapshot {
        id: ID!
        date: String
        dateUnix: Int
        isa: Isa
        cash: Cash
        crypto: Crypto
    }

    type Mutation {
        createSnapshot(date: String!, dateUnix: Int, isa: IsaInput, cash: CashInput, crypto: CryptoInput): Snapshot!
        updateSnapshot(_id: ID!, date: String, dateUnix: Int, isa: IsaInput, cash: CashInput, crypto: CryptoInput): Snapshot!
        createIsa(stocks: Float, commodities: Float, bonds: Float, cash: Float): Isa!
        deleteIsa(id: String): Isa!
        createCash(krakenGBP: Float, krakenUSDT: Float, krakenUSDC: Float, celsiusUSDT: Float, celsiusUSDC: Float, blockfiUSDT: Float, blockfiUSDC: Float, spainEURO: Float): Cash!
        deleteCash(id: String): Cash!
        createCrypto(bitcoin: Float, ether: Float, altcoins: Float): Crypto!
        deleteCrypto(id: String): Crypto!
    }
`