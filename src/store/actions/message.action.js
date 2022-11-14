/* eslint-disable import/no-anonymous-default-export */
import messageService from '../services/message.service';
import { GET_MESSAGES_REQUEST, GET_MESSAGES_SUCCESS, SEND_MESSAGE_REQUEST } from '../types/message.type';

const getMessages = (conversation_id) => async (dispatch) => {
    dispatch({ type: GET_MESSAGES_REQUEST });

    messageService.getMessages(conversation_id)
        .then(response => response.json())
        .then(data => {
            dispatch({ type: GET_MESSAGES_SUCCESS, payload: data })
        });
};

const sendMessage = (data, callback) => async (dispatch) => {
    dispatch({ type: SEND_MESSAGE_REQUEST });

    messageService.sendMessage(data)
        .then(response => response.json())
        .then(() => {
            dispatch(getMessages(data.conversation_id));
            callback();
        });
};

export default { getMessages, sendMessage };