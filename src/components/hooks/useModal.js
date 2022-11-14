import { useDispatch } from 'react-redux';

import modalActions from '../../store/actions/ui/modal.action';

const useModal = () => {
    const dispatch = useDispatch();

    const closeModal = () => dispatch(modalActions.closeModal());

    return { closeModal };
};

export default useModal;
