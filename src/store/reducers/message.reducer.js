/* eslint-disable import/no-anonymous-default-export */
import { GET_MESSAGES_SUCCESS, GET_MESSAGES_REQUEST, GET_MESSAGES_FAILURE, SEND_MESSAGE_REQUEST } from '../types/message.type';

const initialState = {
    loading: true,
    messages: null,
};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SEND_MESSAGE_REQUEST:
        case GET_MESSAGES_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_MESSAGES_SUCCESS:
            return {
                ...state,
                loading: false,
                messages: payload,
            };
        case GET_MESSAGES_FAILURE:
            return {
                ...state,
                loading: false,
                messages: null,
            }
        default:
            return state;
    }
};
