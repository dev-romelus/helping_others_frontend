import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import ServiceForm from '../core/forms/ServiceForm';
import { Container } from '../helpers/Container';

const RequestService = ({ className }) => {
    const geolocalisation = useSelector(state => state.geolocalisation);

    return (
        <div className={className}>
            <Container>
                <ServiceForm currentPosition={geolocalisation.currentPosition} />
            </Container>
        </div>
    );
}

export default styled(RequestService)`
    padding: 12px;
`;
