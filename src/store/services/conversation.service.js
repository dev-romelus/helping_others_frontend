import authHeader from "../../utils/auth-header";

/* eslint-disable import/no-anonymous-default-export */
const getConversation = () => {
    return fetch(`/api/v1/conversations/`, {
        method: 'GET',   
        headers: authHeader(), 
    });
}

const createConversation = (data) => {
    return fetch('/api/v1/conversations', {
        method: 'POST',   
        headers: authHeader(),
        body: JSON.stringify(data),
    });
}

export default { getConversation, createConversation };