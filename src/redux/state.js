import {renderEntireTree} from "../renderEntireTree";

let state = {
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
        ]
    },
    sideBar: {}
}

export let addPost = (sendedMessage) => {
    debugger;

    let newPost = {
        id: 5,
        message: sendedMessage,
        likesCount: 0,
    }
    state.profilePage.posts.push(newPost)
    renderEntireTree(state)
}


export default state;