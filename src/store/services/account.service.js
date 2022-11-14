/* eslint-disable import/no-anonymous-default-export */
const updateIdentityDocument = (userData) => {
    return fetch('/api/v1/update', {
        method: 'POST',   
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData), 
    });
};

export default { updateIdentityDocument };