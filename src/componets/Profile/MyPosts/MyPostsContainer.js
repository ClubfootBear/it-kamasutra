import React from 'react';
//Component import
import {addNewPostCreator, updateNewPostCreator} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

// const MyPostsContainer = () => {
//     return (
//         <Context.Consumer>
//             {
//             (store) =>
//                 {
//                     let state = store.getState();
//                     let posts = state.profilePage.posts;
//                     let newPostText = state.profilePage.newPostText;
//
//
//                     let addNewPost = () => {
//                         store.dispatch(addNewPostCreator())
//                     }
//
//                     let onPostChange = (text) => {
//                         store.dispatch(updateNewPostCreator(text));
//                     }
//                     return <MyPosts
//                         posts={posts}
//                         newPostText={newPostText}
//                         addNewPost={addNewPost}
//                         onPostChange={onPostChange}
//                     />
//                 }
//         }
//         </Context.Consumer>
//     );
// }

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: () => {
            dispatch(addNewPostCreator())
        },
        onPostChange: (text) => {
            dispatch(updateNewPostCreator(text))
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;