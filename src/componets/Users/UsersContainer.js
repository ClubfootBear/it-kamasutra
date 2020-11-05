//ApIKey c27281a1-c877-4294-ae13-c3271b2f6a40
//https://social-network.samuraijs.com/

import React from 'react';
import {
    follow,
    setCurrentPage,
    setFetching,
    setUsers,
    setUsersTotalCount,
    unFollow
} from "../../redux/users_reducer";
import {connect} from "react-redux";
import * as axios from 'axios';
import Users from "./Users";
import Preloader from "../Preloader/Preloader";

class UsersApiComponent extends React.Component {

    componentDidMount() {
        this.props.setFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageToShow}`,
            {withCredentials: true}
            ).then( response => {
            // debugger;
            this.props.setUsers(response.data.items);
            this.props.setUsersTotalCount(response.data.totalCount);
            this.props.setFetching(false)
        });
    }

    onChangePage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageToShow}`,
            {withCredentials: true}
            ).then( response => {
            // debugger;
            this.props.setUsers(response.data.items)
            this.props.setFetching(false)
        });
    }

    render() {
        return <> { this.props.isFetching ?
            <Preloader />
            : null}
            <Users
                usersCount={this.props.usersCount}
                pageToShow={this.props.pageToShow}
                currentPage={this.props.currentPage}
                onChangePage={this.onChangePage}
                users={this.props.users}
                unFollow={this.props.unFollow}
                follow={this.props.follow}
                setFetching={this.props.setFetching}
            />
        </>
    }
}

// export default UsersApiComponent;

let mapStateToProps = (state) =>
{
    // debugger
    return {
        users: state.usersPage.users,
        usersCount: state.usersPage.usersCount,
        pageToShow: state.usersPage.pageToShow,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

// let mapDispatchToProps = (dispatch) =>
// {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unFollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setUsersTotalCount: (totalUsers) => {
//             dispatch(setUsersTotalCountAC(totalUsers))
//         },
//         setFetching: (isFetching) => {
//             dispatch(setIsFetchingAC(isFetching))
//         }
//
//     }
// }

const UsersContainer = connect(mapStateToProps,
    {
        follow,
        unFollow,
        setUsers,
        setCurrentPage,
        setUsersTotalCount,
        setFetching,
    }
    )(UsersApiComponent);

export default UsersContainer;