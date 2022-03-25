import { ActionTypes } from "../ActionType";

export const Relode = (state = { count: 0 }, action) => {
    switch (action.type) {
        case ActionTypes.RELODE:
            return { ...state, count: action.payload }
        default:
            return state;
    }
}