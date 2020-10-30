import React from 'react';
import s from './Profile.module.css';
//Component import
import ProfileInfo from "./ProfileInfo/ProfileInfo";
// import MyPostsContainer from "./MyPosts/MyPostsContainer";
import MyPosts from "./MyPosts/MyPosts";
import store from "../../redux/redux_store";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                // store={props.store}
                posts={props.store.profilePage.posts}
                newPostText={props.store.profilePage.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    );
}

export default Profile;