import express from "express"
import mongoose from "mongoose"
import { ApolloServer } from "apollo-server-express"
import { resolvers } from "./resolver"
import { typeDefs } from "./typeDefs"

const server = async () => {
    const app = express()

    const server = new ApolloServer({
        typeDefs, 
        resolvers
    })

    server.applyMiddleware({app})

    console.log(process.env.mongoUserName, '123')
    console.log(process.env.mongoUserPassword, 'pass')

    try {
        await mongoose.connect(`mongodb+srv://${process.env.mongoUserName}:${process.env.mongoUserPassword}@cluster0-oustz.mongodb.net/${process.env.mongoDatabase}?authSource=admin&replicaSet=Cluster0-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true`);
    } catch(err) {
        console.log(err);
    }

    app.get('/', (req, res) => {
        return res.send('hello world!')
    })  

    const PORT = process.env.PORT || 4001;

    app.listen({port: PORT}, () => {
        console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
    })
}

server()