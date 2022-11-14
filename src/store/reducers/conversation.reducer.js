/* eslint-disable import/no-anonymous-default-export */
import { GET_CONVERSATION_SUCCESS, GET_CONVERSATION_REQUEST, GET_CONVERSATION_FAILURE, CREATE_CONVERSATION_SUCCESS } from '../types/conversation.type';

const initialState = {
    loading: true,
    conversations: null,
    users: null,
};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_CONVERSATION_REQUEST:
            return initialState;
        case GET_CONVERSATION_SUCCESS:
            return {
                ...state,
                loading: false,
                conversations: payload,
            };
        case GET_CONVERSATION_FAILURE:
            return {
                ...state,
                loading: false,
                conversations: null,
                users: null,
            }
        case CREATE_CONVERSATION_SUCCESS:
            return {
                ...state,
                loading: false,
                conversations: [...state.conversations, payload],
            }
        default:
            return state;
    }
};
