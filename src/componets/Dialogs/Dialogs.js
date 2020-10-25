import React from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import Dialog from "./DialogItem/Dialog";


const Dialogs = () => {

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    <Dialog/>
                </div>
                <div className={s.messages}>
                    <Message/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;