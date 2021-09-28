import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { connectToMongooseDB } from "./utils/mongooseConnection";

import pollRoutes from "./routes/pollRoutes";
import votingRoutes from "./routes/votingRoutes";

const app = express();
const PORT = process.env.PORT || 4200;

connectToMongooseDB();

app.use(bodyParser.json());
app.use(cors());

app.use("/polls", pollRoutes);
app.use("/voting", votingRoutes)

app.listen(PORT, () => {
    console.log(`Connected to the server on port ${PORT}`);
});
