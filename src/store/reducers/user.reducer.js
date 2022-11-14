/* eslint-disable import/no-anonymous-default-export */
import { GET_USER_SUCCESS, GET_USER_REQUEST, UPDATE_USER_SUCCESS, UPDATE_USER_REQUEST } from '../types/user.type';

const initialState = {
    loading: true,
    user: null,
};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case UPDATE_USER_REQUEST:
        case GET_USER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: payload,
            };
        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: payload,
            }
        default:
            return state;
    }
};
