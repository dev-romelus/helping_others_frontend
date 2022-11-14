import React from 'react';
import styled from 'styled-components';

const Input = (props) => {
    return (
        <>
            {props.type === 'textarea' ? <textarea rows='5' {...props} /> : <input {...props} />}
            {props.error  && <span style={{ color: 'red', marginBottom: '10px' }}>{props.error}</span>}
        </>
    );
};

export default styled(Input)`
    width: 100%;
    padding: 0.6rem;
    border: none;
    border-radius: 2px;
    outline: none;
    border: 1px solid #d9d9d9;
    font-size: 15px;

    &:focus {
        border: 1px solid #1890ff;
    }
`;
