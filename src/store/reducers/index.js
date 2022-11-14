import { combineReducers } from 'redux';

import modal from './ui/modal.reducer';
import auth from './auth.reducer';
import geolocalisation from './geolocalisation.reducer';
import user from './user.reducer';
import conversation from './conversation.reducer';
import services from './services.reducer';
import message from './message.reducer';

export default combineReducers({
    ui: combineReducers({
        modal,
    }),
    auth,
    userState: user,
    conversationState: conversation,
    servicesState: services,
    messageState: message,
    geolocalisation,
});