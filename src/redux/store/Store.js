import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { Relode, Connection, Message, MessageNotify } from "../reducer/RelodeReducer";

const mainReducer = combineReducers({
    RelodeStore: Relode,
    ConnectionStore: Connection,
    MessageStore: Message,
    MessageNotifyStore: MessageNotify
});

const cmposeEnhanser = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const Store = createStore(mainReducer, cmposeEnhanser(applyMiddleware(thunk)));