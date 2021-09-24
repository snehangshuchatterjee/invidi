import Mongoose from "mongoose";
import { PollModel } from "../models/pollModel";

/**
 * Method to fetch the list of sports as an array
 * 
 * @param {*} inputArray 
 * @returns 
 */
const getArrayOfSports = (inputArray) => {
    const result = new Set();

    inputArray.map(item => {
        result.add(item.sport);
    })

    return Array.from(result);
}

export const getAllPollCategories = async (req, res) => {
    const arrayOfSportTypes = await PollModel.find({},'sport');

    const sportsArray = getArrayOfSports(arrayOfSportTypes);

    res.send(sportsArray);
};

export const getAllPollsforASport = async (req, res) => {
    const arrayOfSportTypes = await PollModel.find(req.query);

    res.send(arrayOfSportTypes);
};