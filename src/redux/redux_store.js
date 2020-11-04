import {combineReducers, createStore} from "redux";
import dialogReducer from "./dialog_reducer";
import profileReducer from "./profile_reducer";
import sideBarReducer from "./sideBar_reducer";
import usersReducer from "./users_reducer";
import authReducer from "./auth_reducer";

let reducers = combineReducers({
    dialogsPage: dialogReducer,
    profilePage: profileReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

let store = createStore(reducers);

window.store = store;

export default store;