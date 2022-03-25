import { ActionTypes } from "../ActionType"

const refresh = () => async (dispatch, store) => {
    const { count } = store().RelodeStore;
    dispatch({
        type: ActionTypes.RELODE,
        payload: count + 1
    })
}