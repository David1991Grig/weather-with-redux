import { api_key, base_url } from "../utils/constants.js";
export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchData = (city) => {
    return (dispatch) => {
        dispatch({ type: FETCH_DATA });

        return fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Enter a correct city name");
                }
                return response.json();
            })
            .then((data) => {
                dispatch({ type: FETCH_DATA_SUCCESS, payload: data });
            })
            .catch((error) => {
                dispatch({ type: FETCH_DATA_FAILURE, payload: error.message });
            });
    };
};
