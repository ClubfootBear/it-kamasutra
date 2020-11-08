import {usersApi} from "../componets/Api/api";

const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'Hi', likesCount: 15,},
        {id: 2, message: 'Da', likesCount: 35,},
        {id: 3, message: 'Vot tak vot', likesCount: 5,},
    ],
    newPostText: 'It-Kamasutra',
    userData: null,
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST:{
            let stateCopy = {
                ...state,
                newPostText: action.newText,
            }
            return stateCopy;
        }
        case ADD_POST:{
            let newPostBody = state.newPostText;
            let stateCopy = {
                ...state,
                newPostText: '',
                posts: [...state.posts, {id: 5, message: newPostBody, likesCount: 0,}]
            }
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            return {...state, userData: action.userData}
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

export const setUserProfile = (userData) => ({
    type: SET_USER_PROFILE, userData
})

export const getUserId = (userId) => {
    return (dispatch) => {
        usersApi.userProfile(userId).then( data => {
            dispatch(setUserProfile(data))
        });
    }
}


export default profileReducer;