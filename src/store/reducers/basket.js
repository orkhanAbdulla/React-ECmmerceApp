import { ADD_ITEM_TO_BASKET,REMOVE_ITEM_FROM_BASKET } from "../constants";

const basketFromStorage = localStorage.getItem("basket");
const basketInitialValue = basketFromStorage?JSON.parse(basketFromStorage):[]
export const basketReducer=(state=basketInitialValue,action)=>{
   
    switch (action.type) {
        case ADD_ITEM_TO_BASKET:
            const addItem=[...state,action.payload]
            localStorage.setItem('basket',JSON.stringify(addItem))
            return addItem
        case REMOVE_ITEM_FROM_BASKET:
            const removeItem=state.filter(item=>item.id!==action.payload)
            localStorage.setItem('basket',JSON.stringify(removeItem))
            return removeItem
        default:
            return state;
    }
}