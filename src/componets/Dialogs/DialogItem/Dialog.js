import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";


const Dialog = (props) => {
    let path = '/dialogs/'

    let dialogs = [
        {id: 1, name: 'Vasay'},
        {id: 2, name: 'Petya'},
        {id: 3, name: 'Dima'},
        {id: 4, name: 'Sveta'},
    ]

    let dialogsItems = dialogs.map(d => (
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