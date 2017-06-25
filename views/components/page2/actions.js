export const ITEM_1 = 'item_1'
export const ITEM_2 = 'item_2'
export const ITEM_3 = 'item_3'

export const CHANGE_ITEM = 'change_item'

export function changeItemAction(itemName){
    return {
        type:CHANGE_ITEM,
        payload:itemName
    }
}