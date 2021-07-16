import {applyMiddleware, combineReducers, createStore} from "redux";

import thunkMiddleware from "redux-thunk";
import listReducer from "./redusers/list-reduser";

let reducers = combineReducers({
    list: listReducer
});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

export default store;