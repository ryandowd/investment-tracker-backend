import mongoose from "mongoose";
const Schema = mongoose.Schema;

var cashSchema = new Schema({
    date: {
        type: String,
        required: true
    },
    dateUnix: {
        type: Number,
        required: true
    },
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
    },
});

export const Cash = mongoose.model("Cash", cashSchema);

