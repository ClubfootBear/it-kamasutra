import React from 'react';
import s from './Profile.module.css';
//Component import
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo
                {...props}
                status={props.status}
                uptUserStatus={props.uptUserStatus}
            />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;