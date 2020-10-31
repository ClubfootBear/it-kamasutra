import React from 'react';
import s from './MyPosts.module.css';
//Component import
import Post from "./Post/Post";

const MyPosts = (props) => {
    let messageItems = props.posts.map( p => <Post post={p.message} likesCount={p.likesCount}/>)

    let onAddNewPost = () => {
        props.addNewPost()
    }

    let onPostChange = (e) => {
        props.onPostChange(e.target.value)
    }

    return (
        <div className={s.postsBlock}>
            <h3>
                My posts
            </h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={ onAddNewPost }>Add new Post</button>
                </div>
                <div className={s.posts}>
                    {messageItems}
                </div>
            </div>
        </div>
    );
}

export default MyPosts;