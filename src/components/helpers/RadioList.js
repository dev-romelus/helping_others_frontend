import React from 'react';
import styled from 'styled-components';

import Radio from './Radio';

const RadioList = ({ className, items, index, onChange, title }) => {
    return (
        <div className={className}>
            <span>{title}</span>
            {items.map((item) => (
                <Radio item={item} key={item.index} checked={item.index === index} onChange={onChange} margin />
            ))}
        </div>
    );
};

export default styled(RadioList)`
    display: flex;
    > span {
        margin-right: 6px;
    }
`;
