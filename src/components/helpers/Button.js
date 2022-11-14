import React from 'react';
import styled from 'styled-components';

const sizes = { small: 24, medium: 36, large: 48 };

const Button = ({ className, children, type, onClick, size = 'small', icon, disabled }) => {
    return (
        <button className={className} type={type} onClick={onClick} disabled={disabled}>
            <span className={`material-icons md-${sizes[size]}`}>{icon}</span>
            <span>{children}</span>
        </button>
    );
};

const StyledButton = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 12px;
    outline: none;
    background-color: #000;
    border-radius: var(--border-radius);
    border: none;
    font-size: inherit;
    color: #fff;
    cursor: pointer;

    > span {
        margin-right: 6px;
    }
`;

export default StyledButton;
