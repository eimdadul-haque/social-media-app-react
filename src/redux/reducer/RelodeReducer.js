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