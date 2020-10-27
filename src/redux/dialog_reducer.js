import {act} from "@testing-library/react";

const UPDATE_MESSAGE_BODY = 'UPDATE-MESSAGE-BODY';
const ADD_MESSAGE_BODY = 'ADD-MESSAGE';

const dialogReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_MESSAGE_BODY:
            state.newMessageBody = action.textBody;
            return state;
        case ADD_MESSAGE_BODY:
            let newMessage = {
                id: 13,
                message: state.newMessageBody,
            }
            state.dialogMessages.push(newMessage)
            state.newMessageBody = '';
            return state;
        default:
            return state;
    }
}


export const updateMessageBodyCreator = (text) => ({
        type: UPDATE_MESSAGE_BODY,
        textBody: text,
    })

export const addNewMessageCreator = () => ({
    type: ADD_MESSAGE_BODY,
})

export default dialogReducer;