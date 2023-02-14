import { combineReducers } from "redux";
import { userReducer } from "./useReducer";

const rootReducer = combineReducers({
    Nationality: userReducer
})

export default rootReducer