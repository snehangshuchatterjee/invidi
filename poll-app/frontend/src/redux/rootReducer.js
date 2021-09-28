import { combineReducers } from 'redux';

import pollsReducer from "../polls/polls.reducer";

const RootReducer = combineReducers({
    pollsReducer,
});

export default RootReducer;