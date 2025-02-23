import {api_key, base_url} from "../utils/constants.js";

export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchDataSuccess = (data) => ({
    type: FETCH_DATA_SUCCESS,
    payload: data,
});

export const fetchDataFailure = (error) => ({
    type: FETCH_DATA_FAILURE,
    payload: error,
});
export const fetchWeather = async (city, dispatch) => {
    try {
        const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
        if (!response.ok) {
            throw new Error('Enter correct city name');
        }
        const data = await response.json();
        dispatch(fetchDataSuccess(data));
    } catch (err) {
        dispatch(fetchDataFailure(err.message));
    }
}
