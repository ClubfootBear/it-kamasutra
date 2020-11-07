import {usersApi} from "../componets/Api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const FETCHING_IN_PROGRESS = 'FETCHING_IN_PROGRESS';

let initialState = {
    users: [],
    usersCount: 0,
    pageToShow: 5,
    currentPage: 2,
    isFetching: false,
    followingInProgress: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true,}
                    }
                    return u;
                }),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false,}
                    }
                    return u;
                }),
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_USERS_TOTAL_COUNT:
            return {...state, usersCount: action.totalUsers}
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching}
        case FETCHING_IN_PROGRESS:
            return { ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId ]
                    : state.followingInProgress.filter( id => id != action.userId) }
        default:
            return state;
    }
}


export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unFollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCount = (totalUsers) => ({type: SET_USERS_TOTAL_COUNT, totalUsers})
export const setFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const setFetchingInProgress = (isFetching, userId) => ({type: FETCHING_IN_PROGRESS,isFetching,userId})


export const getUsers = (currentPage, pageToShow) => {
    return (dispatch) => {
        dispatch(setFetching(true))
        usersApi.getUsers(currentPage, pageToShow).then(data => {
            dispatch(setUsers(data.items));
            dispatch(setUsersTotalCount(data.totalCount));
            dispatch(setFetching(false))
        });
    }
}


export const unFollow = (userId) => {
    return (dispatch) => {
        dispatch(setFetchingInProgress(true, userId))
        usersApi.letUnFollow(userId).then( data => {
            if (data.resultCode === 0) {dispatch(unFollowSuccess(userId))}
            dispatch(setFetchingInProgress(false, userId))
        });
    }
}


export const follow = (userId) => {
    return (dispatch) => {
        dispatch(setFetchingInProgress(true, userId))
        usersApi.letFollow(userId).then( data => {
            if (data.resultCode === 0) {dispatch(followSuccess(userId))}
            dispatch(setFetchingInProgress(false, userId))
        });
    }
}




export default usersReducer;