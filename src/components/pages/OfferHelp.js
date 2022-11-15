import React, { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

import Mapbox from '../helpers/map/Mapbox';
import { Container } from '../helpers/Container';

import useCurrentLocation from '../hooks/useCurrentLocation';
import styled from 'styled-components';
import { servicesType } from '../../utils/enums';
import conversationAction from '../../store/actions/conversation.action';
import servicesAction from '../../store/actions/services.action';
import storage from '../../utils/storage';

const OfferHelp = ({ className }) => {
    const [info, setInfo] = useState(null);
    const { location } = useCurrentLocation();
    const { services } = useSelector((state) => state.servicesState);
    const filteredServices = useMemo(() => services.filter(service => service.status === 'IN_PROGRESS'), [services])
    const dispatch = useDispatch();
    const userId = Number(storage.getUserId());
    const navigate = useNavigate();
    
    function createConversation(data) {
        if (userId) dispatch(conversationAction.createConversation({ service_id: data.id, receiver_id: data.user_id, sender_id: userId, service: { description: data.description } }, redirect));
    }

    function redirect(data) {
        navigate(`/conversations/${data.conversation_id}/messages/${data.sender_id}/service/${data.service_id}`);
    }

    useEffect(() => {
        dispatch(conversationAction.getConversation());
        dispatch(servicesAction.getServices());
    }, [dispatch])

    return (
        <div className={className}>
            <Container>
                <Mapbox coordinates={location} requests={filteredServices} strategyType='requests' onClickMarker={setInfo} />
                {info && (
                    <div className='map_popup'>
                        <div>
                            <div>
                                <span>Type of request: </span>
                                <span>{servicesType[info.request_type]}</span>
                            </div>
                            <span>{info.description}</span>
                        </div>
                        <Button onClick={() => createConversation(info)} disabled={userId === info.user_id}>Contact {info.user.lastName}</Button>
                    </div>
                )}
            </Container>
        </div>
    )
}

export default styled(OfferHelp)`
    padding: 12px;
    > div {
        > .map_popup {
            position: absolute;
            top: 12px;
            right: 12px;
            background-color: #fff;
            padding: 10px;
            width: 247px;
            padding: 12px;
            border-radius: 4px;
            > div {
                display: flex;
                flex-direction: column;
                > span {
                    margin-bottom: 4px;
                }
            }
        }
    }
`;
