import {
    FETCH_FEATURE
} from '../actions/types';

export const reducer = (state = {}, action) => {

    switch (action.type) {
        case FETCH_FEATURE:
            return { ...state, homePageFeatures: action.payload}
        default:
            return state;
    }
};
