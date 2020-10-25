import React from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import Dialog from "./DialogItem/Dialog";


const Dialogs = (props) => {

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    <Dialog dialogs={props.dialogsPage.dialogs}/>
                </div>
                <div className={s.messages}>
                    <Message dialogMessages={props.dialogsPage.dialogMessages}/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;