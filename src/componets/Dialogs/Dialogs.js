import React from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import Dialog from "./DialogItem/Dialog";
import {addNewMessageCreator, updateMessageBodyCreator} from "../../redux/dialog_reducer";


const Dialogs = (props) => {

    let addNewMessage = () => {
        props.dispatch(addNewMessageCreator());
    }

    let onMessageBodyChange = (e) => {
        // debugger;
        props.dispatch(updateMessageBodyCreator(e.target.value));
    }


    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    <Dialog dialogs={props.dialogsPage.dialogs}/>
                </div>
                <div className={s.messages}>
                    <Message dialogMessages={props.dialogsPage.dialogMessages}/>
                    <div>
                        <textarea onChange={onMessageBodyChange} value={props.dialogsPage.newMessageBody}></textarea>
                    </div>
                    <div>
                        <button onClick={addNewMessage}>Send Message</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Dialogs;