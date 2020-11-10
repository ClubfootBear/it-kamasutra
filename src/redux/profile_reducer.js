import {profileApi, usersApi} from "../componets/Api/api";

const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const SET_STATUS = 'SET_STATUS';
const UPDATE_STATUS = 'UPDATE_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'Hi', likesCount: 15,},
        {id: 2, message: 'Da', likesCount: 35,},
        {id: 3, message: 'Vot tak vot', likesCount: 5,},
    ],
    userData: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:{
            let newPostBody = action.newPostText;
            let stateCopy = {
                ...state,
                posts: [...state.posts, {id: 5, message: newPostBody, likesCount: 0,}]
            }
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            return {...state, userData: action.userData}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        // case UPDATE_STATUS: {
        //     return {...state, status: action.status}
        // }
        default:
            return state;
    }
}

export const addNewPostCreator = (newPostText) => ({
    type: ADD_POST,
    newPostText: newPostText
})

export const setUserProfile = (userData) => ({
    type: SET_USER_PROFILE, userData
})

export const setStatus = (status) => ({
    type: SET_STATUS, status
})

export const uptStatus = (status) => ({
    type: SET_STATUS, status
})

export const getUserId = (userId) => {
    return (dispatch) => {
        usersApi.userProfile(userId).then( data => {
            dispatch(setUserProfile(data))
        });
    }
}

export const getUserStatus = (userId) => {
    // debugger
    return (dispatch) => {
        profileApi.getStatus(userId).then( response => {
            dispatch(setStatus(response.data))
        });
    }
}

export const uptUserStatus = (status) => {
    // debugger
    return (dispatch) => {
        profileApi.updateStatus(status).then( response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        });
    }
}

export default profileReducer;