import { Stocks } from "./models/stocks";

export const resolvers = {
    Query: {
        stocks: () => Stocks.find()
    },
    Mutation: {
        createStock: async(_, { date, amount }) => {
            const stock = new Stocks({date, amount});
            await stock.save();
            return stock;
        }
    }
}

