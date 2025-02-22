import {combineReducers, legacy_createStore as createStore} from "redux";
import weatherReducer from "./reducers"; // Adjust the import path as necessary

const rootReducer = combineReducers({
    weather: weatherReducer,
});


export const store = createStore(rootReducer);