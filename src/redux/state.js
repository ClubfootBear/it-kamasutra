import {act} from "@testing-library/react";

const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const ADD_POST = 'ADD-POST';


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
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            }
            store._state.profilePage.posts.push(newPost)
            store._state.profilePage.newPostText = '';
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        }
    },
}

export const updateNewPostCreator = (text) => {
    return {
        type: UPDATE_NEW_POST,
        newText: text,
    }
}

export const addNewPostCreator = () => {
    return {type: ADD_POST}
}

export default store;