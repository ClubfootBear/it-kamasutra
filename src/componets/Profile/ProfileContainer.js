import React from 'react';
import s from './Profile.module.css';
//Component import
import Profile from "./Profile";
import {connect} from "react-redux";
import * as axios from "axios";
import {setUserProfile} from "../../redux/profile_reducer";

class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then( response => {
            // debugger;
            this.props.setUserProfile(response.data)
        });
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


export default connect(mapStateToProps, {
    setUserProfile
})(ProfileContainer);