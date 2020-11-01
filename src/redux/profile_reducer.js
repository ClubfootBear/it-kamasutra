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
        case UPDATE_NEW_POST:{
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        case ADD_POST:{
            let stateCopy = {...state}
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            }
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
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