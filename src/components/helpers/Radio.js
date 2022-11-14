import React from 'react';
import styled from 'styled-components';

const Radio = ({ className, item, checked, onChange }) => {
    return (
        <label className={className}>
            <input type='radio' value={item.index} checked={checked} onChange={onChange} label={item.label} name={item.label} />
            {item.label}
        </label>
    );
};

export default styled(Radio)`
    font-size: 16px;
    > input {
        margin: ${({ margin }) => (margin ? '10px' : 'none')};
        background-color: #1890ff;
        color: #1890ff;
    }
`;
