import { ADD_ITEM_TO_BASKET,REMOVE_ITEM_FROM_BASKET } from "../constants"
export const addProductToBasket=(product)=>{
    return{
        type:ADD_ITEM_TO_BASKET,
        payload:product
    }
}
export const removeItemFromBasket=(id)=>{
    return{
        type:REMOVE_ITEM_FROM_BASKET,
        payload:id
    }
} 
