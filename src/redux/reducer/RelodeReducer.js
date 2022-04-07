import { ActionTypes } from "../ActionType"



export const Relode = (state = { count: 0 }, action) => {
    switch (action.type) {
        case ActionTypes.RELODE:
            return { ...state, count: action.payload }
        default:
            return state;
    }
}


export const Connection = (state = { connection: {} }, action) => {
    switch (action.type) {
        case "CONNECTION":
            return { ...state, connection: action.payload }
        default:
            return state;
    }
}


export const Message = (state = { messages: [] }, action) => {
    switch (action.type) {
        case ActionTypes.MESSAGE:
            return { ...state, messages: state.messages.concat(action.payload) }
        default:
            return state;
    }
}


export const MessageNotify = (state = { notify: [] }, action) => {
    switch (action.type) {
        case "NOTI":
            return { ...state, notify: state.notify.concat(action.payload) }
        default:
            return state;
    }
}