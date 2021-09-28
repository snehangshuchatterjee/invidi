export const FETCH_POLL_CATEGORIES = 'FETCH_POLL_CATEGORIES';
export const FETCH_POLL_CATEGORIES_SUCCESS = 'FETCH_POLL_CATEGORIES_SUCCESS';
export const FETCH_POLL_CATEGORIES_FAIL = 'FETCH_POLL_CATEGORIES_FAIL';
export const FETCH_POLLS = 'FETCH_POLLS';
export const FETCH_POLLS_SUCCESS = 'FETCH_POLLS_SUCCESS';
export const FETCH_POLLS_FAIL = 'FETCH_POLLS_FAIL';
export const SAVE_USER_OPINION = 'SAVE_USER_OPINION';
export const SAVE_USER_NAME = 'SAVE_USER_NAME';
export const SAVE_CURRENT_SPORT = 'SAVE_CURRENT_SPORT';
export const SAVE_USER_OPINION_TO_DATABASE = 'SAVE_USER_OPINION_TO_DATABASE';
export const SAVE_USER_OPINION_TO_DATABASE_SUCCESS = 'SAVE_USER_OPINION_TO_DATABASE_SUCCESS';
export const SAVE_USER_OPINION_TO_DATABASE_FAIL = 'SAVE_USER_OPINION_TO_DATABASE_FAIL';

export const fetchPollCategories = () => {
    return {
        type: FETCH_POLL_CATEGORIES,
        payload: {
            request: {
                url: 'polls/categories'
            }
        }
    };
}

export const fetchPollsForGivenCategory = (category) => {
    return {
        type: FETCH_POLLS,
        payload: {
            request: {
                url: `polls/details?sport=${category}`
            }
        }
    };
}

export const saveCurrentUserName = (userName) => {
    return {
        type: SAVE_USER_NAME,
        payload: userName
    }
}

export const saveUserOpinion = (userOpinion) => {
    return {
        type: SAVE_USER_OPINION,
        payload: userOpinion
    }
}

export const saveCurrentSport = (sport) => {
    return {
        type: SAVE_CURRENT_SPORT,
        payload: sport
    }
}

export const saveUserOpinionToDatabase = (userOpinion) => {
    return {
        type: SAVE_USER_OPINION_TO_DATABASE,
        payload: {
            request: {
                url: 'voting/castAVote',
                method: 'POST',
                data: userOpinion
            }
        }
    }
}