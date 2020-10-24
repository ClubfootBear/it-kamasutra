import React from 'react';
import s from './MyPosts.module.css';
//Component import
import Post from "./Post/Post";

const MyPosts = () => {
    let messagesData = [
        {id: 1, message: 'Hi', likesCount: 15,},
        {id: 2, message: 'Da', likesCount: 35,},
        {id: 3, message: 'Vot tak vot', likesCount: 5,},

    ]

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
                    <Post message={messagesData[0].message} likesCount={messagesData[0].likesCount}/>
                    <Post message={messagesData[1].message} likesCount={messagesData[1].likesCount}/>
                </div>
            </div>
        </div>
    );
}

export default MyPosts;