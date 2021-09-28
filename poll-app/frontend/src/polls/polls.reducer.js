import {
    FETCH_POLLS,
    FETCH_POLLS_FAIL,
    FETCH_POLLS_SUCCESS,
    FETCH_POLL_CATEGORIES,
    FETCH_POLL_CATEGORIES_FAIL,
    FETCH_POLL_CATEGORIES_SUCCESS,
    SAVE_USER_OPINION,
    SAVE_USER_NAME,
    SAVE_CURRENT_SPORT,
    SAVE_USER_OPINION_TO_DATABASE,
    SAVE_USER_OPINION_TO_DATABASE_SUCCESS,
    SAVE_USER_OPINION_TO_DATABASE_FAIL,
} from "./polls.actions";

const initialState = {
    loading: false,
    categories: [],
    polls: [],
    error: false,
    userName: "",
    userOpinion: [],
    currentSport: ""
}

export default function pollsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_POLL_CATEGORIES: {
            return({
                ...state,
                loading: true,
                categories: [],
                error: false
            });
        }
        case FETCH_POLL_CATEGORIES_SUCCESS: {
            return({
                ...state,
                loading: false,
                categories: action.payload.data,
                error: false,
            });
        }
        case FETCH_POLL_CATEGORIES_FAIL: {
            return ({
                ...state,
                loading: false,
                categories: [],
                error: true
            });
        }
        case FETCH_POLLS: {
            return ({
                ...state,
                loading: true,
                polls: [],
                error: false
            });
        }
        case FETCH_POLLS_SUCCESS: {
            return ({
                ...state,
                loading: false,
                polls: action.payload.data,
                error: false,
            });
        }
        case FETCH_POLLS_FAIL: {
            return ({
                ...state,
                loading: false,
                polls: [],
                error: true
            });
        }
        case SAVE_USER_OPINION: {
            return ({
                ...state,
                userOpinion: state.userOpinion.concat(action.payload)
            });
        }
        case SAVE_CURRENT_SPORT: {
            return ({
                ...state,
                currentSport: action.payload
            });
        }
        case SAVE_USER_NAME: {
            return ({
                ...state,
                loading: false,
                userName: action.payload
            });
        }
        case SAVE_USER_OPINION_TO_DATABASE: {
            return ({
                ...state,
                loading: true,
                polls: [],
                error: false
            });
        }
        case SAVE_USER_OPINION_TO_DATABASE_SUCCESS: {
            return ({
                ...state,
                loading: false,
                error: false,
            });
        }
        case SAVE_USER_OPINION_TO_DATABASE_FAIL: {
            return ({
                ...state,
                loading: false,
                error: true
            });
        }
        
        default: {
            return (initialState);
        }
    }
}