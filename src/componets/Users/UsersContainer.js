//ApIKey c27281a1-c877-4294-ae13-c3271b2f6a40
//https://social-network.samuraijs.com/

import React from 'react';
import {
    follow, getUsers, setCurrentPage,
    setUsers,
    unFollow
} from "../../redux/users_reducer";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import {compose} from "redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

class UsersApiComponent extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageToShow);
    }

    onChangePage = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageToShow);
        this.props.setCurrentPage(pageNumber);
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
                followingInProgress={this.props.followingInProgress}
                // setCurrentPage={this.props.setCurrentPage}
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
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default compose(
    connect(mapStateToProps,
        {
            setUsers,
            getUsers,
            unFollow,
            follow,
            setCurrentPage,
        }),
    WithAuthRedirect)(UsersApiComponent);

// let AuthRedirectComponent = WithAuthRedirect(Dialogs);

// const UsersContainer = connect(mapStateToProps,
//     {
//         setUsers,
//         getUsers,
//         unFollow,
//         follow,
//         setCurrentPage,
//     })(UsersApiComponent);
//
// export default UsersContainer;