import {authApi, usersApi} from "../componets/Api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_DATA = 'SET_AUTH_DATA';

let initialState =
    {
        id: null,
        email: null,
        login: null,
        isAuth: false,
    }

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA: {
            return {
                ...state,
                ...action.authData,
            }
        }
        default:
            return state;
    }
}


export const setAuthData = (id, email, login, isAuth) => ({
    type: SET_AUTH_DATA,
    authData: {id, email, login, isAuth}
})


export const getAuthData = () => {
    return (dispatch) => {
        usersApi.tookAuthData().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login,} = data.data;
                dispatch(setAuthData(id, email, login, true));
            }
        });
    }
}

export const letLogin = (email, password, rememberMe) => {

    return (dispatch) => {
        authApi.login(email, password, rememberMe).then(data => {
            if (data.resultCode === 0) {
               dispatch(getAuthData());
            } else {
                let message = data.messages.length > 0 ? data.messages[0] : "Wrong Data."
                dispatch(stopSubmit('Login', {_error: message}));
            }
        });
    }
}

export const letLogout = () => {
    return (dispatch) => {
        authApi.logout().then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthData(null, null, null, false));
            }
        });
    }
}


export default authReducer;