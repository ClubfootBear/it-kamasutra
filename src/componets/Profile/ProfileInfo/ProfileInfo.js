import React from 'react';
import s from './Profile.Info.module.css';
import Preloader from "../../Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    debugger
    return (
        <div>
            <div>
                <img
                    className={s.profileImg}
                    src="https://million-wallpapers.ru/wallpapers/5/15/558809402572735.jpg" alt=""/>
            </div>
            <div className={s.profileDiv}>
                <img src={props.profile.photos.small} alt=""/>
            </div>
            <div>Name - {props.profile.fullName}</div>
            <div>{props.profile.aboutMe}</div>
        </div>
    );
}

export default ProfileInfo;