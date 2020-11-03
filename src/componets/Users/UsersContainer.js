import React from 'react';
import {followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfollowAC} from "../../redux/users_reducer";
import Users from "./Users";
import {connect} from "react-redux";

let mapStateToProps = (state) =>
{
    // debugger
    return {
        users: state.usersPage.users,
        usersCount: state.usersPage.usersCount,
        pageToShow: state.usersPage.pageToShow,
        currentPage: state.usersPage.currentPage,
    }
}

let mapDispatchToProps = (dispatch) =>
{
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setUsersTotalCount: (totalUsers) => {
            dispatch(setUsersTotalCountAC(totalUsers))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;