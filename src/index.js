import express from "express"
import mongoose from "mongoose"
import { ApolloServer, gql } from "apollo-server-express"
import { resolvers } from "./resolver"
import { typeDefs } from "./typeDefs"

const server = async () => {
    const app = express()

    const server = new ApolloServer({
        typeDefs, 
        resolvers
    })

    server.applyMiddleware({app})

    try {
        await mongoose.connect("mongodb+srv://ryand:ryand123@cluster0-oustz.mongodb.net/investment_tracker?authSource=admin&replicaSet=Cluster0-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true");
    } catch(err) {
        console.log(err);
    }

    app.get('/', (req, res) => {
        return res.send('hello world!')
    })

    app.listen({port: 4001}, () => {
        console.log('connected')
    })
}

server()