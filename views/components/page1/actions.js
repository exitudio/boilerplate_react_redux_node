import Axios from 'axios'

export const REST_FAIL = 'rest_fail'
export const GET_ITEM_FROM_STORE = 'get_item_from_store'

export function getItemInStoreAction(storeName){
    return dispatch=>{
        return Axios.get('/services/getitem')
        .then(response=>{
            console.log(response.data)
            dispatch(
                {
                    type: GET_ITEM_FROM_STORE, 
                    payload: response.data
                }
            )
        })
        .catch((response) => {
            dispatch({type: REST_FAIL, payload: response.data})
        })
    }
    
    // {
    //     type:GET_ITEM_FROM_STORE,
    //     payload:storeName
    // }
}