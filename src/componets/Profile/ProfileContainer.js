import React from 'react';
import s from './Profile.module.css';
//Component import
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserId, setUserProfile} from "../../redux/profile_reducer";
import {withRouter, Redirect} from "react-router-dom";

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
        if (!this.props.isAuth) return (<Redirect to={"/login"} />)

        return (<div>
            <Profile {...this.props} profile={this.props.profile}/>
        </div>)
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.userData,
    isAuth: state.auth.isAuth,
})

let toRouthProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    getUserId,
})(toRouthProfileContainer);