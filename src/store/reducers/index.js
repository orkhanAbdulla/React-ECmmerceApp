import { combineReducers } from "redux";
import { basketReducer } from "./basket";

export  const rootReducer=combineReducers({
    basket:basketReducer
})