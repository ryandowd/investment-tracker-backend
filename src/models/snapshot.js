import mongoose from "mongoose";
const Schema = mongoose.Schema;

var isaSchema = new Schema({
    stocks: {
        type: Number
    },
    commodities: {
        type: Number
    },
    bonds: {
        type: Number
    },
    cash: {
        type: Number
    }
});

var cashSchema = new Schema({
    krakenGBP: {
        type: Number
    },
    krakenUSDT: {
        type: Number
    },
    krakenUSDC: {
        type: Number
    },
    celsiusUSDT: {
        type: Number
    },
    celsiusUSDC: {
        type: Number
    },
    blockfiUSDT: {
        type: Number
    },
    blockfiUSDC: {
        type: Number
    },
    spainEURO: {
        type: Number
    }
});

var cryptoSchema = new Schema({
    bitcoin: {
        type: Number
    },
    ether: {
        type: Number
    },
    altcoins: {
        type: Number
    }
});

var snapshotSchema = new Schema({
    date: {
        type: String,
        required: true
    },
    dateUnix: {
        type: Number,
        required: true
    },
    isa: [isaSchema],
    cash: [cashSchema],
    crypto: [cryptoSchema]
});

export const Snapshot = mongoose.model("Snapshot", snapshotSchema);


