import React from 'react';
import {addNewMessageCreator, updateMessageBodyCreator} from "../../redux/dialog_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    debugger
    return {
        dialogs: state.dialogsPage.dialogs,
        dialogMessages: state.dialogsPage.dialogMessages,
        newMessageBody: state.dialogsPage.newMessageBody,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: () => {
            dispatch(addNewMessageCreator())
        },
        onMessageBodyChange: (text) => {
            dispatch(updateMessageBodyCreator(text))
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;