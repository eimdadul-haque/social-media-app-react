import { ActionTypes } from "../ActionType"

export const UserInfoAction = (info) => async (dispatch, store) => {
    dispatch({
        type: ActionTypes.USER_INFO,
        payload: info
    });
}