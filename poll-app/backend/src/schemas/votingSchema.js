import Mongoose from "mongoose";

export const VotingSchema = new Mongoose.Schema({
    name: String,
    date: Date,
    sport: String,
    votingDetails: [{
        pollID: Number,
        winner: String
    }]
});