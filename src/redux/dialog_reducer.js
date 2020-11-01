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
        newMessageBody: 'Viva la IT-Kamasutra!',
    }

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_MESSAGE_BODY:{
            let stateCopy = {...state}
            stateCopy.newMessageBody = action.textBody;
            return stateCopy;
        }
        case ADD_MESSAGE_BODY:{
            let stateCopy = {...state}
            let newMessage = {
                id: 13,
                message: state.newMessageBody,
            }
            stateCopy.dialogMessages = [...state.dialogMessages];
            stateCopy.dialogMessages.push(newMessage);
            stateCopy.newMessageBody = '';
            return stateCopy;
        }
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