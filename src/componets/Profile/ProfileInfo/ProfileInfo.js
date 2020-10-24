import React from 'react';
import s from './Profile.Info.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    className={s.profileImg}
                    src="https://million-wallpapers.ru/wallpapers/5/15/558809402572735.jpg" alt=""/>
            </div>
            <div className={s.profileDiv}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;