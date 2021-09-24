import { Router } from 'express';

import { asyncMiddleware } from "../middlewares/asyncMiddleware";
import { castAVote } from "../controllers/votingController";

const votingRoutes = Router();

votingRoutes.post("/castAVote", asyncMiddleware(castAVote));

export default votingRoutes;