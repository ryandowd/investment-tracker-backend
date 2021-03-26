import mongoose from "mongoose";
const Schema = mongoose.Schema;

var cryptoSchema = new Schema({
    date: {
        type: String,
        required: true
    },
    dateUnix: {
        type: Number,
        required: true
    },
    bitcoin: {
        type: Number
    },
    ether: {
        type: Number
    },
    altcoins: {
        type: Number
    },
});

export const Crypto = mongoose.model("Crypto", cryptoSchema);

