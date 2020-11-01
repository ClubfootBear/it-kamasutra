import React from 'react';
import {addNewMessageCreator, updateMessageBodyCreator} from "../../redux/dialog_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


// const DialogsContainer = () => {
//     return <Context.Consumer>
//         {
//             (store) => {
//
//                 let state = store.getState();
//
//                 let addNewMessage = () => {
//                     store.dispatch(addNewMessageCreator());
//                 }
//
//                 let onMessageBodyChange = (text) => {
//                     store.dispatch(updateMessageBodyCreator(text));
//                 }
//
//                 return <Dialogs
//                     addNewMessage={addNewMessage}
//                     onMessageBodyChange={onMessageBodyChange}
//                     dialogs={state.dialogsPage.dialogs}
//                     dialogMessages={state.dialogsPage.dialogMessages}
//                     newMessageBody={state.dialogsPage.newMessageBody}
//                 />
//             }
//         }
//
//     </Context.Consumer>
// }

let mapStateToProps = (state) => {
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