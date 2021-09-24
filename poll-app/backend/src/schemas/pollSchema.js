import Mongoose from "mongoose";

export const PollSchema = new Mongoose.Schema({
    awayName: String,
    createdAt: String,
    group: String,
    homeName: String,
    id: Number,
    name: String,
    objectId: String,
    sport: String,
    country: String,
    state: String
});