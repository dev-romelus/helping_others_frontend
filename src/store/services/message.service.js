/* eslint-disable import/no-anonymous-default-export */
import authHeader from "../../utils/auth-header";

const getMessages = (conversation_id) => {
    return fetch(`/api/v1/conversations/${conversation_id}/messages`, {
        method: 'GET',   
        headers: authHeader(), 
    });
}

const sendMessage = (data) => {
    return fetch(`/api/v1/conversations/${data.conversation_id}/messages`, {
        method: 'POST',   
        headers: authHeader(),
        body: JSON.stringify(data),
    });
}

export default { getMessages, sendMessage };