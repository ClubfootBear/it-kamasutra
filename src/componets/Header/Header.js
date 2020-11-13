import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg"/>
            <div className={s.loginBlock}>
                {/*{ props.isAuth ? <NavLink to={'profile/'}>{props.login}</NavLink> :*/}
                {/*    <NavLink to={'login/'}>Login</NavLink>*/}
                {/*}*/}
                { props.isAuth ? <div>{props.login} - <button onClick={props.letLogout}>Logout</button></div> :
                    <NavLink to={'login/'}>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header;