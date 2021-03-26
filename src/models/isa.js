import mongoose from "mongoose";
const Schema = mongoose.Schema;

var isaSchema = new Schema({
    date: {
        type: String,
        required: true
    },
    dateUnix: {
        type: Number,
        required: true
    },
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

export const Isa = mongoose.model("Isa", isaSchema);

