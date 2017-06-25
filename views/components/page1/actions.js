import axios from 'axios'

export const GET_ITEM_FAIL = 'get_item_fail'
export const GET_ITEM_SUCCESS = 'get_item_succes'
export const GET_ITEM_REQUEST = 'get_item_request'

export function getItemInStoreAction(storeName) {
    return dispatch => {
        dispatch({ type: GET_ITEM_REQUEST })

        return axios.get('/services/getitem')
            .then(response => {
                // console.log(response.data)
                dispatch(
                    {
                        type: GET_ITEM_SUCCESS,
                        payload: response.data
                    }
                )
            })
            .catch(response => {
                dispatch({ type: GET_ITEM_FAIL, payload: response })
            })
    }
}


