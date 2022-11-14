import React from 'react';
import styled from 'styled-components';
import { Marker } from 'react-map-gl';

const CustomMarker = ({ className, data = {}, onClickMarker }) => {
    return (
        <Marker className={className} latitude={Number(data.latitude)} longitude={Number(data.longitude)}>
            <span className='material-icons' onClick={() => onClickMarker(data)}>location_on</span>
        </Marker>
    )
};

export default styled(CustomMarker)`
    > span {
        color: ${({ data }) => data?.request_type === 'material_needs' ? '#a55eea' : '#55E6C1'};
        cursor: pointer;
    }
`;
