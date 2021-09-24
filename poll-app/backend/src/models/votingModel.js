import Mongoose from "mongoose";
import { VotingSchema } from "../schemas/votingSchema";

export const VotingModel = Mongoose.model('Voting', VotingSchema);