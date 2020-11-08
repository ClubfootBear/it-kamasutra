import {usersApi} from "../componets/Api/api";
import {followSuccess, setFetchingInProgress} from "./users_reducer";

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
                isAuth: true,
            }
        }
        default:
            return state;
    }
}


export const setAuthData = (id, email, login) => ({
    type: SET_AUTH_DATA,
    authData: {id, email, login,}
})


export const getAuthData = () => {
    return (dispatch) => {
        usersApi.tookAuthData().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login,} = data.data;
                dispatch(setAuthData(id, email, login,));
            }
        });
    }
}

export default authReducer;