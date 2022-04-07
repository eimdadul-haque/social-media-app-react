import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { Relode, Connection } from "../reducer/RelodeReducer";

const mainReducer = combineReducers({
    RelodeStore: Relode,
    ConnectionStore: Connection
});

const cmposeEnhanser = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const Store = createStore(mainReducer, cmposeEnhanser(applyMiddleware(thunk)));