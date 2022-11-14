/* eslint-disable import/no-anonymous-default-export */
import { GET_GEOLOCALISATION_REQUEST, GET_GEOLOCALISATION_SUCCESS } from '../types/geolocalisation.type';

import geolocalisation from '../../utils/geolocalisation';

const getCurrentPosition = () => async (dispatch) => {
    dispatch({ type: GET_GEOLOCALISATION_REQUEST });

    geolocalisation.getCurrentPosition(({ latitude, longitude }) => {
        dispatch({ type: GET_GEOLOCALISATION_SUCCESS, payload: { latitude, longitude } })
    });
};

export default { getCurrentPosition };