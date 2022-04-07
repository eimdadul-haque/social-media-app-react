import { ActionTypes } from "../ActionType"


export const MesageNotifyAction = (notify) => async (dispatch, Store) => {
    dispatch({
        type: "NOTI",
        payload: notify
    })
}
