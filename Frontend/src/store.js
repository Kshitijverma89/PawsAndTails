import { AuthReducer } from "./context/AuthContext";
import { cartReducer } from "./State/Cart/Reducer";
import { orderReducer } from "./State/Order/Reducer";
import { thunk } from "redux-thunk";
import { legacy_createStore, applyMiddleware, combineReducers } from "redux";

// const { legacy_createStore, applyMiddleware, combineReducers } = require("redux");
// const { thunk } = require("redux-thunk");

const rootReducers = combineReducers({
    // auth:AuthReducer,
    cart:cartReducer,
    order:orderReducer
})

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk))