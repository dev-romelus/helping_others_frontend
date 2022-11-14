/* eslint-disable import/no-anonymous-default-export */
import conversationService from '../services/conversation.service';
import { CREATE_CONVERSATION_SUCCESS, GET_CONVERSATION_SUCCESS } from '../types/conversation.type';

const getConversation = () => async (dispatch) => {
    conversationService.getConversation()
        .then(response => response.json())
        .then(data => {
            dispatch({ type: GET_CONVERSATION_SUCCESS, payload: data })
        });
};

const createConversation = (data, callback) => async (dispatch) => {
    conversationService.createConversation(data)
        .then(response => response.json())
        .then(conversationResponse => {
            if (conversationResponse) {
                callback({ 
                    ...data,
                    conversation_id: conversationResponse.conversation.id
                });
            }
            if (!conversationResponse.conversationExists) dispatch({ type: CREATE_CONVERSATION_SUCCESS, payload: data });
        }).catch(console.log);
}

export default { getConversation, createConversation };
