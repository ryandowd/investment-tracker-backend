// import { Isa } from "./models/isa";
// import { Crypto } from "./models/crypto";
// import { Cash } from "./models/cash";
import { Snapshot } from "./models/snapshot";

export const resolvers = {
    Query: {
        snapshot: () => Snapshot.find()
        // isa: async () => {
        //     const isas = await Isa.find();
        //     return isas.reverse();
        // },
        // cash: () => Cash.find(),
        // crypto: () => Crypto.find(),
        // getIsa: async (parent, args) => await Isa.findOne({_id: args._id})
    },
    Mutation: {
        createSnapshot: async(_, { date, dateUnix, isa, cash, crypto }) => {
            const snapshot = new Snapshot({ date, dateUnix, isa, cash, crypto });
            await snapshot.save();
            return snapshot;
        },
        updateSnapshot: async(_, { _id, date, dateUnix, isa, cash, crypto }) => {
            return Snapshot.findByIdAndUpdate({ _id }, { date, dateUnix, isa, cash, crypto }, { new: true });
        }




        // createIsa: async(_, { date, dateUnix, stocks, commodities, bonds, cash }) => {
        //     const isa = new Isa({date, dateUnix, stocks, commodities, bonds, cash});
        //     await isa.save();
        //     return isa;
        // },
        // deleteIsa: async(_, { id }) => {
        //     return await Isa.findByIdAndRemove(id);
        // },
        // createCash: async(_, { date, dateUnix, krakenGBP, krakenUSDT, krakenUSDC, celsiusUSDT, celsiusUSDC, blockfiUSDT, blockfiUSDC, spainEURO }) => {
        //     const cash = new Cash({date, dateUnix, krakenGBP, krakenUSDT, krakenUSDC, celsiusUSDT, celsiusUSDC, blockfiUSDT, blockfiUSDC, spainEURO});
        //     await cash.save();
        //     return cash;
        // },
        // deleteCash: async(_, { id }) => {
        //     return await Cash.findByIdAndRemove(id);
        // },
        // createCrypto: async(_, { date, dateUnix, bitcoin, ether, altcoins }) => {
        //     const crypto = new Crypto({ date, dateUnix, bitcoin, ether, altcoins });
        //     await crypto.save();
        //     return crypto;
        // },
        // deleteCrypto: async(_, { id }) => {
        //     return await Crypto.findByIdAndRemove(id);
        // },
    }
}
