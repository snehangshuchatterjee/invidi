import { createStore, applyMiddleware } from "redux";
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import RootReducer from "./rootReducer";

import { BASE_URL_LOCAL } from "../config/backendServerDetails";


const client = axios.create({
    baseURL: BASE_URL_LOCAL,
});

const middleware = [axiosMiddleware(client)];

export default createStore(
    RootReducer,
    applyMiddleware(...middleware)
);