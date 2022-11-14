import authHeader from "../../utils/auth-header";

/* eslint-disable import/no-anonymous-default-export */
const createService = (data) => {
    return fetch(`/api/v1/services`, {
        method: 'POST',   
        headers: authHeader(), 
        body: JSON.stringify(data),
    });
}

const getServices = () => {
    return fetch(`/api/v1/services`, {
        method: 'GET',   
        headers: authHeader(), 
    });
}

const getService = (serviceId) => {
    return fetch(`/api/v1/services/${serviceId}`, {
        method: 'GET',   
        headers: authHeader(), 
    });
}

const updateService = (updatedService) => {
    return fetch(`/api/v1/services/${updatedService.id}`, {
        method: 'PUT',
        body: JSON.stringify(updatedService),
        headers: authHeader(), 
    });
}

export default { createService, getServices, getService, updateService };
