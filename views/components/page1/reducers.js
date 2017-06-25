import * as Actions from './actions'

export default function changeItemReducer(state={},action){
    switch(action.type){
        case Actions.GET_ITEM_FROM_STORE:
            return {
                itemsInStore:action.payload
            }
        default :
            return state
    }
}