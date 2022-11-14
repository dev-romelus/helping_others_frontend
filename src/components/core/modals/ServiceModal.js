import React from 'react';
import { useSelector } from 'react-redux';

import Modal from '../../helpers/Modal';

import ServiceForm from '../forms/ServiceForm';

import useModal from '../../hooks/useModal';

const ServiceModal = () => {
    const { serviceModalState } = useSelector(state => state.ui.modal);
    const { closeModal } = useModal();

    return (
        <Modal display={serviceModalState.display} title='Request a service' onClose={closeModal}>
            <ServiceForm currentPosition={serviceModalState.currentPosition} />
        </Modal>
    );
};

export default ServiceModal;
