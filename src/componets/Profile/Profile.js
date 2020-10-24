import React from 'react';
import s from './Profile.module.css';
//Component import
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src="https://million-wallpapers.ru/wallpapers/5/15/558809402572735.jpg" alt=""/>
        </div>
        <div>
            ava + description
        </div>
        <div>
            <MyPosts/>
        </div>
    </div>
}

export default Profile;