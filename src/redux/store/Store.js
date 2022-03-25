import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { Relode } from "../reducer/RelodeReducer";

const mainReducer = combineReducers({
    RelodeStore: Relode
});

const cmposeEnhanser = compose;

export const Store = createStore(mainReducer, cmposeEnhanser(applyMiddleware(thunk)));