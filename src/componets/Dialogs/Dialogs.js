import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
}

const Dialogs = () => {
    let dialogsData = [
        {id: 1, name: 'Vasay'},
        {id: 2, name: 'Petya'},
        {id: 3, name: 'Dima'},
        {id: 4, name: 'Sveta'},
    ]

    let messagesData = [
        {id: 1, message: 'What did you say?'},
        {id: 2, message: 'Hey!'},
        {id: 3, message: 'WTF>>??'},
    ]

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                    <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                </div>
                <div className={s.messages}>
                    <Message message={messagesData[0].message}/>
                    <Message message={messagesData[1].message}/>
                    <Message message={messagesData[2].message}/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;