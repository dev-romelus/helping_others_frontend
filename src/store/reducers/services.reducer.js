/* eslint-disable import/no-anonymous-default-export */
import { CREATE_SERVICE_REQUEST, CREATE_SERVICE_SUCCESS, GET_SERVICES_REQUEST, GET_SERVICES_SUCCESS, GET_SERVICE_REQUEST, GET_SERVICE_SUCCESS, UPDATE_SERVICE_SUCCESS } from '../types/services.type';

const initialState = {
    services: [],
    service: null,
    loading: true,
};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_SERVICE_REQUEST:
        case CREATE_SERVICE_REQUEST:
        case GET_SERVICES_REQUEST:
            return {
                ...state,
                loading: true
            };
        case GET_SERVICES_SUCCESS:
            return {
                ...state,
                services: payload,
                loading: false,
            };
        case UPDATE_SERVICE_SUCCESS:
            const newServices = state.services;
            const idx = newServices.findIndex((service) => service.id === payload.id);
            newServices[idx] = payload;
        
            return {
                ...state,
                service: payload,
                services: newServices,
                loading: false,
            }
        case GET_SERVICE_SUCCESS:
            return {
                ...state,
                service: payload,
                loading: false,
            }
        case CREATE_SERVICE_SUCCESS:
            return {
                ...state,
                services: [...state.services, payload],
                loading: false,
            }
        default:
            return state;
    }
};
