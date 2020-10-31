import React from 'react';
import {addNewMessageCreator, updateMessageBodyCreator} from "../../redux/dialog_reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = props => {
    let state = props.store.getState();

    let addNewMessage = () => {
        props.store.dispatch(addNewMessageCreator());
    }

    let onMessageBodyChange = (text) => {
        props.store.dispatch(updateMessageBodyCreator(text));
    }


    return (
        <div>
            <Dialogs
                addNewMessage={addNewMessage}
                onMessageBodyChange={onMessageBodyChange}
                dialogs={state.dialogsPage.dialogs}
                dialogMessages={state.dialogsPage.dialogMessages}
                newMessageBody={state.dialogsPage.newMessageBody}
            />
        </div>
    )
}

export default DialogsContainer;