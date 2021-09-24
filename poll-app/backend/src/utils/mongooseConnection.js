import Mongoose from "mongoose";

const url = `mongodb+srv://admin:admin@sneh.qnvgh.mongodb.net/invidiAssignment?retryWrites=true&w=majority`;

export const connectToMongooseDB = () => {
    Mongoose.connect(url)
        .then(() => {
            console.log('Connected to database ')
        })
        .catch((err) => {
            console.error(`Error connecting to the database. \n${err}`);
        });
};
