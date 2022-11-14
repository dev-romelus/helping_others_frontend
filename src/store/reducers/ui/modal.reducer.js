/* eslint-disable import/no-anonymous-default-export */
import { CLOSE_MODAL, SHOW_SERVICE_MODAL } from '../../types/ui/modal.type';

const initialState = {
    serviceModalState: { display: false },
};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SHOW_SERVICE_MODAL:
            return {
                ...state,
                serviceModalState: { display: true, currentPosition: payload },
            };
        case CLOSE_MODAL:
            return initialState;
        default:
            return state;
    }
};
