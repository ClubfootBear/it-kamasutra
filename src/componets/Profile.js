import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src="https://million-wallpapers.ru/wallpapers/5/15/558809402572735.jpg" alt=""/>
        </div>
        <div>
            ava + description
        </div>
        <div>
            my posts
            <div>
                new posts
                <div className={s.item}>
                    <div>Post1</div>
                    <div>Post2</div>
                    <div>Post3</div>
                    <div>Post4</div>
                </div>
            </div>
        </div>
    </div>
}

export default Profile;