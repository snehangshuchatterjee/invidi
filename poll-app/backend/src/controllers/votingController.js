import Mongoose from "mongoose";
import { VotingModel } from "../models/votingModel";

export const castAVote = async (req, res) => {
    const votingDetails = req.body;

    const newVotingItem = new VotingModel(votingDetails);

    const result = await newVotingItem.save();

    console.log(result);

    res.status(200);
    res.send("Data Saved Successfully")
}