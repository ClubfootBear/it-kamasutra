import {act} from "@testing-library/react";

const UPDATE_MESSAGE_BODY = 'UPDATE-MESSAGE-BODY';
const ADD_MESSAGE_BODY = 'ADD-MESSAGE';

let initialState =
    {
        dialogs: [
            {id: 1, name: 'Vasay'},
            {id: 2, name: 'Petya'},
            {id: 3, name: 'Dima'},
            {id: 4, name: 'Sveta'},
        ],
        dialogMessages: [
            {id: 1, message: 'What did you say?'},
            {id: 2, message: 'Hey!'},
            {id: 3, message: 'WTF>>??'},
        ],
    }

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE_BODY:{
            let messageBody = action.newMessageBody;
            let stateCopy = {
                ...state,
                dialogMessages: [...state.dialogMessages, {id:13, message: messageBody}]
            }
            return stateCopy;
        }
        default:
            return state;
    }
}


export const addNewMessageCreator = (newMessageBody) => ({
    type: ADD_MESSAGE_BODY,
    newMessageBody: newMessageBody
})

export default dialogReducer;