

export const ConnectionAction = (connection) => async (dispatch, Store) => {
    dispatch({
        type: "CONNECTION",
        payload: connection
    })
}
