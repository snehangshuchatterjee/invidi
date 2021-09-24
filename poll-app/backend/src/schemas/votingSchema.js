import Mongoose from "mongoose";

export const VotingSchema = new Mongoose.Schema({
    name: String,
    date: Date,
    votingDetails: [{
        pollID: Number,
        winner: String
    }]
});