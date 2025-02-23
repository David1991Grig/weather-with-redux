import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import weatherReducer from './reducers';





const store = createStore(weatherReducer, applyMiddleware(thunk));

export default store;