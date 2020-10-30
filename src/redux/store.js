import {act} from "@testing-library/react";
import dialogReducer from "./dialog_reducer";
import profileReducer from "./profile_reducer";
import sideBarReducer from "./sideBar_reducer";

let store = {
    _state: {
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Vasay'},
                {id: 2, name: 'Petya'},
                {id: 3, name: 'Dima'},
                {id: 4, name: 'Sveta'},
            ],
            dialogMessages: [
                {id: 1, message: 'What did you say?'},
                {id: 2, message: 'Hey!'},
                {id: 3, message: 'WTF>>??'},
            ],
            newMessageBody: 'Viva la IT-Kamasutra!',
        },
        profilePage: {
            posts: [
                {id: 1, message: 'Hi', likesCount: 15,},
                {id: 2, message: 'Da', likesCount: 35,},
                {id: 3, message: 'Vot tak vot', likesCount: 5,},
            ],
            newPostText: 'It-Kamasutra',
        },
        sideBar: {},
    },

    getState () {
        return this._state
    },

    _callSubscriber() {
        console.log('Privet')
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch (action) {
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.sideBar = sideBarReducer(this._state.sideBar, action);
        this._callSubscriber(this._state);
    },
}

// export default store;