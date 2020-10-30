import {combineReducers, createStore} from "redux";
import dialogReducer from "./dialog_reducer";
import profileReducer from "./profile_reducer";
import sideBarReducer from "./sideBar_reducer";

let reducers = combineReducers({
    dialogsPage: dialogReducer,
    profilePage: profileReducer,
    sideBar: sideBarReducer,
})

let store = createStore(reducers);

export default store;