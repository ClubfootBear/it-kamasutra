import React from 'react';
import s from './MyPosts.module.css';
//Component import
import Post from "./Post/Post";

const MyPosts = () => {
    let messages = [
        {id: 1, message: 'Hi', likesCount: 15,},
        {id: 2, message: 'Da', likesCount: 35,},
        {id: 3, message: 'Vot tak vot', likesCount: 5,},

    ]

    let messageItems = messages.map( m => <Post message={m.message} likesCount={m.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>
                My posts
            </h3>
            <div>
                <div>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div>
                    <button>Add new Post</button>
                </div>
                <div className={s.posts}>
                    {messageItems}
                </div>
            </div>
        </div>
    );
}

export default MyPosts;