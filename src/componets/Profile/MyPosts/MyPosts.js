import React from 'react';
import s from './MyPosts.module.css';
//Component import
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            my posts
            <div>
                <button>Add new Post</button>
                <Post message="hi mahalay"/>
                <Post message="Yes Yes Yes"/>
            </div>
        </div>
    );
}

export default MyPosts;