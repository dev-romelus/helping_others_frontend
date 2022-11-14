import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Modal = ({ className, children, onClose, display, title = '' }) => {

    if (!display) return null;

    return ReactDOM.createPortal(
        <div className={className}>
            <div className='overlay' onClick={onClose} />
            <div className='modal'>
                {title && <div className='modal-header'>{title}</div>}
                <span className='close' onClick={onClose}>
                    X
                </span>
                <div className='modal-content'>{children}</div>
            </div>
        </div>,
        document.getElementById('modal')
    );
}

export default styled(Modal)`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;

    > .overlay {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.6);
    }

    > .modal {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: 76%;
        height: 86%;
        background-color: #fff;
        border-radius: 6px;
        overflow-y: auto;
        overflow: hidden;

        > .modal-header {
            width: 100%;
            padding: .6rem;
            text-align: center;
            font-size: 22px;
            font-weight: 700;
            color: #000;
        }

        > .modal-content {
            width: 100%;
            overflow-y: auto;
        }

        > .close {
            position: absolute;
            right: 6px;
            top: 6px;
            cursor: pointer;
        }
    }
`;
