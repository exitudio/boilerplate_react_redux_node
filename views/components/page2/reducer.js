import * as Actions from './actions'

export default function changeItemReducer(state={},action){
    switch(action.type){
        case Actions.CHANGE_ITEM:
            return {
                currentItem:action.payload
            }
        default :
            return state
    }
}