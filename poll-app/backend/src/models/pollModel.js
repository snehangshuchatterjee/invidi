import Mongoose from "mongoose";
import { PollSchema } from "../schemas/pollSchema";

export const PollModel = Mongoose.model('Polls', PollSchema);