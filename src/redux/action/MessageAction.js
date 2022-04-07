import { ActionTypes } from "../ActionType";


export const MessageAction = (message) => async (dispatch, Store) => {
    dispatch({
        type: ActionTypes.MESSAGE,
        payload: message
    })
}
