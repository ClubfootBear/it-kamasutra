//ApIKey c27281a1-c877-4294-ae13-c3271b2f6a40
//https://social-network.samuraijs.com/

import React from 'react';
import {
    follow,
    setCurrentPage,
    setFetching, setFetchingInProgress,
    setUsers,
    setUsersTotalCount,
    unFollow
} from "../../redux/users_reducer";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import {usersApi} from "../Api/api";

class UsersApiComponent extends React.Component {

    componentDidMount() {
        this.props.setFetching(true)
        // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageToShow}`,
        //     {withCredentials: true}
        //     ).then( response => {
        //     // debugger;
        //     this.props.setUsers(response.data.items);
        //     this.props.setUsersTotalCount(response.data.totalCount);
        //     this.props.setFetching(false)
        // });
        usersApi.getUsers(this.props.currentPage, this.props.pageToShow).then( data => {
            this.props.setUsers(data.items);
            this.props.setUsersTotalCount(data.totalCount);
            this.props.setFetching(false)
        });
    }

    onChangePage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setFetching(true)
        usersApi.getUsers(this.props.currentPage, this.props.pageToShow).then( data => {
            // debugger;
            this.props.setUsers(data.items)
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
                setFetchingInProgress={this.props.setFetchingInProgress}
                followingInProgress={this.props.followingInProgress}
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
        followingInProgress: state.usersPage.followingInProgress,
    }
}


const UsersContainer = connect(mapStateToProps,
    {
        follow,
        unFollow,
        setUsers,
        setCurrentPage,
        setUsersTotalCount,
        setFetching,
        setFetchingInProgress,
    }
    )(UsersApiComponent);

export default UsersContainer;