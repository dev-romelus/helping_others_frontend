/* eslint-disable import/no-anonymous-default-export */
import { GET_GEOLOCALISATION_REQUEST, GET_GEOLOCALISATION_SUCCESS } from '../types/geolocalisation.type';
import { CREATE_SERVICE_REQUEST, CREATE_SERVICE_SUCCESS, GET_SERVICES_SUCCESS, GET_SERVICE_REQUEST, GET_SERVICE_SUCCESS, UPDATE_SERVICE_REQUEST, UPDATE_SERVICE_SUCCESS } from '../types/services.type'
import geolocalisation from '../../utils/geolocalisation';
import servicesService from '../services/services.service';

const getCurrentPosition = () =>  (dispatch) => {
    dispatch({ type: GET_GEOLOCALISATION_REQUEST });

    geolocalisation.getCurrentPosition(({ latitude, longitude }) => {
        dispatch({ type: GET_GEOLOCALISATION_SUCCESS, payload: { latitude, longitude } })
    });
};

const createService = (data, { success }) =>  (dispatch) => {
    dispatch({ type: CREATE_SERVICE_REQUEST });
    servicesService.createService(data)
        .then(response => response.json())
        .then((data) => {
            success();
            dispatch({ type: CREATE_SERVICE_SUCCESS, payload: data });
        });
}

const getServices = () => async (dispatch) => {
    servicesService.getServices()
        .then(response => response.json())
        .then(data => {
            dispatch({ type: GET_SERVICES_SUCCESS, payload: data })
        });
};

const getService = (serviceId) => async (dispatch) => {
    dispatch({ type: GET_SERVICE_REQUEST });
    servicesService.getService(serviceId)
        .then(response => response.json())
        .then(data => {
            dispatch({ type: GET_SERVICE_SUCCESS, payload: data });
        });
};

const updateService = (updatedService, { success }) => async (dispatch) => {
    dispatch({ type: UPDATE_SERVICE_REQUEST });
    servicesService.updateService(updatedService)
        .then(response => response.json())
        .then(data => {
            success();
            dispatch({ type: UPDATE_SERVICE_SUCCESS, payload: data });
        }).catch(console.error);
};

export default { getCurrentPosition, createService, getServices, getService, updateService };
