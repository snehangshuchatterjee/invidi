import { Router } from 'express';

import { asyncMiddleware } from "../middlewares/asyncMiddleware";
import { getAllPollCategories, getAllPollsforASport } from "../controllers/pollController";

const pollRoutes = Router();

pollRoutes.get("/categories", asyncMiddleware(getAllPollCategories));
pollRoutes.get("/details", asyncMiddleware(getAllPollsforASport));

export default pollRoutes;