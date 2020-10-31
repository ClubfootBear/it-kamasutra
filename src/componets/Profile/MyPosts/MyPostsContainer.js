import React from 'react';
//Component import
import {addNewPostCreator, updateNewPostCreator} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState();
    let posts = state.profilePage.posts;
    let newPostText = state.profilePage.newPostText;


    let addNewPost = () => {
        props.store.dispatch(addNewPostCreator())
    }

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostCreator(text));
    }

    return (
        <MyPosts
            posts={posts}
            newPostText={newPostText}
            addNewPost={addNewPost}
            onPostChange={onPostChange}
        />
    );
}

export default MyPostsContainer;