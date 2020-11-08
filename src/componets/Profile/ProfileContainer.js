import React from 'react';
import s from './Profile.module.css';
//Component import
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserId, setUserProfile} from "../../redux/profile_reducer";
import {withRouter, Redirect} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId)
        {
            userId=2;
        }
        this.props.getUserId(userId)
    }


    render() {

        return (<div>
            <Profile {...this.props} profile={this.props.profile}/>
        </div>)
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.userData,
})

export default compose(
    connect(mapStateToProps, {
        getUserId,
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