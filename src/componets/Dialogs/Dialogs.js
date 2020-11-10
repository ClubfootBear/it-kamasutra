import React from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import Dialog from "./DialogItem/Dialog";
import {Field, reduxForm} from "redux-form";

const DialogForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <div>
            <Field component={"textarea"} name={"newMessageBody"} value={props.newMessageBody} />
        </div>
        <div>
            <button>Send Message</button>
        </div>
    </form>)
}


const DialogReduxForm = reduxForm({
    form: 'DialogForm'
})(DialogForm)


const Dialogs = (props) => {
    // if (!props.isAuth) return <Redirect to={"/login"} />;

    const addNewMessage = (dataForm) => {
        props.addNewMessage(dataForm.newMessageBody)
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    <Dialog dialogs={props.dialogs}/>
                </div>
                <div className={s.messages}>
                    <Message dialogMessages={props.dialogMessages}/>
                    <DialogReduxForm onSubmit={addNewMessage} />
                </div>
            </div>
        </div>
    )
}

export default Dialogs;