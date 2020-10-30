const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const ADD_POST = 'ADD-POST';

let initialState = {
    posts: [
        {id: 1, message: 'Hi', likesCount: 15,},
        {id: 2, message: 'Da', likesCount: 35,},
        {id: 3, message: 'Vot tak vot', likesCount: 5,},
    ],
    newPostText: 'It-Kamasutra',}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST:
            state.newPostText = action.newText;
            return state;
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            }
            state.posts.push(newPost)
            state.newPostText = '';
            return state;
        default:
            return state;
    }
}

export const updateNewPostCreator = (text) => ({
        type: UPDATE_NEW_POST,
        newText: text,
    })

export const addNewPostCreator = () => ({
    type: ADD_POST
})

export default profileReducer;