import mongoose from "mongoose";
const Schema = mongoose.Schema;

var stocksSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    amount: {
        type: Number,
        required: true
    }
});

export const Stocks = mongoose.model("Stocks", stocksSchema);

