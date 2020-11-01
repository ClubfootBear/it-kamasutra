import React from 'react';
//Component import
import {addNewPostCreator, updateNewPostCreator} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";
import {Context} from "../../../redux/Context";
import store from "../../../redux/redux_store";

const MyPostsContainer = () => {


    return (
        <Context.Consumer>
            {
            (store) =>
                {
                    let state = store.getState();
                    let posts = state.profilePage.posts;
                    let newPostText = state.profilePage.newPostText;


                    let addNewPost = () => {
                        store.dispatch(addNewPostCreator())
                    }

                    let onPostChange = (text) => {
                        store.dispatch(updateNewPostCreator(text));
                    }
                    return <MyPosts
                        posts={posts}
                        newPostText={newPostText}
                        addNewPost={addNewPost}
                        onPostChange={onPostChange}
                    />
                }
        }
        </Context.Consumer>
    );
}

export default MyPostsContainer;