import React from 'react';
import s from './../Dialogs.module.css'


const Message = (props) => {

    let messages = [
        {id: 1, message: 'What did you say?'},
        {id: 2, message: 'Hey!'},
        {id: 3, message: 'WTF>>??'},
    ]

    let messagesItems = messages.map(m => <div className={s.message}>{m.message}</div>)

    return (
        <div>
            {messagesItems}
        </div>
    )
}

export default Message;