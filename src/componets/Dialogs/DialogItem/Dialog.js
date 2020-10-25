import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";


const Dialog = (props) => {
    let path = '/dialogs/'

    let dialogsItems = props.dialogs.map(d => (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={`${path}${d.id}`}>{d.name}</NavLink>
        </div>
    ));

    return (
        <div>
            {dialogsItems}
        </div>
    )
}

export default Dialog;