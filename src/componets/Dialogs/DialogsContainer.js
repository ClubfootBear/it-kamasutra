import React from 'react';
import {addNewMessageCreator,} from "../../redux/dialog_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    // debugger
    return {
        dialogs: state.dialogsPage.dialogs,
        dialogMessages: state.dialogsPage.dialogMessages,
        newMessageBody: state.dialogsPage.newMessageBody,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: (newMessageBody) => {
            dispatch(addNewMessageCreator(newMessageBody))
        },
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect)(Dialogs);

// let AuthRedirectComponent = WithAuthRedirect(Dialogs);
//
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
//
// export default DialogsContainer;