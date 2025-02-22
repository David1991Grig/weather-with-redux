// reducer.js
import { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from './actions';

const initialState = {
    loading: false,
    data: null,
    error: null,
};

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return { ...state, loading: true, error: null };
        case FETCH_DATA_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case FETCH_DATA_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default weatherReducer;
