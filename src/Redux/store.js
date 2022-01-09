import { combineReducers, createStore } from "redux";
import easyReducer from "./easyReducer";
import normalReducer from "./normalReducer";
import hardReducer from "./hardReducer.js";

let reducers = combineReducers({
    easy: easyReducer,
    normal: normalReducer,
    hard: hardReducer,
});
let store = createStore(reducers);
window.store = store;
export default store;