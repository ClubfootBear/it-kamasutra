import React from 'react';
import s from './MyPosts.module.css';
//Component import
import Post from "./Post/Post";

const MyPosts = (props) => {
    let messageItems = props.posts.map( p => <Post post={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();

    let addNewPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>
                My posts
            </h3>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={ addNewPost }>Add new Post</button>
                </div>
                <div className={s.posts}>
                    {messageItems}
                </div>
            </div>
        </div>
    );
}

export default MyPosts;