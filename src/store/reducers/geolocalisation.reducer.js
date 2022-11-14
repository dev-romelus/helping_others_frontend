/* eslint-disable import/no-anonymous-default-export */
import { GET_GEOLOCALISATION_REQUEST, GET_GEOLOCALISATION_SUCCESS } from '../types/geolocalisation.type';

const initialState = {
    currentPosition: {
        latitude: 48.85, 
        longitude: 2.29,
    },
    loading: true,
};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_GEOLOCALISATION_REQUEST:
            return state;
        case GET_GEOLOCALISATION_SUCCESS:
            return {
                ...state,
                currentPosition: payload,
                loading: false,
            };
        default:
            return state;
    }
};
