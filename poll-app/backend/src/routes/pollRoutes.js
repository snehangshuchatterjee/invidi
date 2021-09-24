import { Router } from 'express';

import { asyncMiddleware } from "../middlewares/asyncMiddleware";
import { getAllPollCategories, getAllPollsforASport } from "../controllers/pollController";

const pollRoutes = Router();

pollRoutes.get("/getCategories", asyncMiddleware(getAllPollCategories));
pollRoutes.get("/getPolls", asyncMiddleware(getAllPollsforASport));

export default pollRoutes;