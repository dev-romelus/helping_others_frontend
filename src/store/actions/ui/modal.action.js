/* eslint-disable import/no-anonymous-default-export */
import { CLOSE_MODAL, SHOW_SERVICE_MODAL } from '../../types/ui/modal.type';

const showServiceModal = (data) => ({ type: SHOW_SERVICE_MODAL, payload: data });

const closeModal = () => ({ type: CLOSE_MODAL });

export default { closeModal, showServiceModal };
