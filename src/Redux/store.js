import { combineReducers, createStore } from "redux";
import easyReducer from "./easyReducer";

let reducers = combineReducers({
    easy: easyReducer,
});
let store = createStore(reducers);
window.store = store;
export default store;