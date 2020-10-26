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

    renderEntireTree() {
        console.log('Privet')
    },

    addPost() {

        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        }
        store._state.profilePage.posts.push(newPost)
        store._state.profilePage.newPostText = '';
        this.renderEntireTree(this._state)
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this.renderEntireTree(this._state)
    },

    subscribe(observer) {
        this.renderEntireTree = observer;
    }

}

export default store;