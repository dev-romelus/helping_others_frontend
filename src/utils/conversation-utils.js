function formatConversations(conversations = [], user = {}) {
    return conversations.map((conversation) => {
        const sender = user.id === conversation.sender_id;
        return {
            key: conversation.id,
            name: sender ? `${conversation.receiver.firstName} ${conversation.receiver.lastName}` :  `${conversation.sender.firstName} ${conversation.sender.lastName}`,
            description: conversation.service.description,
            service_id: conversation.service_id,
        }
    })
}

export default { formatConversations };
