import React from 'react';
import s from './Profile.module.css';
//Component import
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserId, getUserStatus, setUserProfile, uptUserStatus} from "../../redux/profile_reducer";
import {withRouter, Redirect} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId)
        {
            userId=this.props.authorizedUserId;
        }
        this.props.getUserId(userId)
        this.props.getUserStatus(userId)

    }


    render() {
        return (<div>
            <Profile
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                uptUserStatus={this.props.uptUserStatus}
            />
        </div>)
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.userData,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
})

export default compose(
    connect(mapStateToProps, {
        getUserId,
        getUserStatus,
        uptUserStatus,
    }),
    withRouter,
    WithAuthRedirect)(ProfileContainer);



// let AuthRedirectComponent = WithAuthRedirect(ProfileContainer);
//
// let toRouthProfileContainer = withRouter(AuthRedirectComponent);
//

//
// export default connect(mapStateToProps, {
//     getUserId,
// })(toRouthProfileContainer);