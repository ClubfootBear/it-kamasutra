import React from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import Dialog from "./DialogItem/Dialog";


const Dialogs = (props) => {

    let addNewMessage = () => {
        props.addNewMessage();
    }

    let onMessageBodyChange = (e) => {
        // debugger;
        props.onMessageBodyChange(e.target.value);
        // dispatch(updateMessageBodyCreator(e.target.value));
    }

    // if (!props.isAuth) return <Redirect to={"/login"} />;

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    <Dialog dialogs={props.dialogs}/>
                </div>
                <div className={s.messages}>
                    <Message dialogMessages={props.dialogMessages}/>
                    <div>
                        <textarea onChange={onMessageBodyChange} value={props.newMessageBody}></textarea>
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