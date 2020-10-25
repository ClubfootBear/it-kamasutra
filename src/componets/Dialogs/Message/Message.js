import React from 'react';
import s from './../Dialogs.module.css'


const Message = (props) => {

    let messagesItems = props.dialogMessages.map(m => <div className={s.message}>{m.message}</div>)

    return (
        <div>
            {messagesItems}
        </div>
    )
}

export default Message;