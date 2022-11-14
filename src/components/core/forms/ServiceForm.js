import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

import Mapbox from '../../helpers/map/Mapbox';
import Input from '../../helpers/Input';

import useForm from '../../hooks/useForm';
import RadioList from '../../helpers/RadioList';
import servicesAction from '../../../store/actions/services.action';
import userAction from '../../../store/actions/user.action';

const checkboxs = [
    { index: 0, label: 'Material needs', request_type: 'material_needs' },
    { index: 1, label: 'Occasional tasks', request_type: 'occasional_tasks' },
];

const ServiceForm = ({ className, currentPosition }) => {
    const [coordinates, setCoordinates] = useState(currentPosition);
    const dispatch = useDispatch()
    const { values, radio, errors, handleSubmit, handleFieldChange, handleRadioChange } = useForm(onSubmit, validateServiceForm);
    const { user } = useSelector((state) => state.userState);
    const navigate = useNavigate();

    const onClickMap = async ({ lngLat }) => {
        const [longitude, latitude] = lngLat;
        setCoordinates((coordinates) => ({ ...coordinates, longitude, latitude }));
    }

    async function onSubmit() {
        const { request_type } = checkboxs[radio];

        dispatch(servicesAction.createService({ ...values, ...coordinates, request_type, user_id: user.id }, { success: () => navigate('/dashboard') }))
    }

    useEffect(() => {
        dispatch(userAction.getCurrentUser())
    }, [dispatch]);

    return (
        <form className={className} onSubmit={handleSubmit}>
            <Mapbox coordinates={coordinates} onClickMap={onClickMap} strategyType='currentPosition' />
            <RadioList items={checkboxs} index={radio} onChange={handleRadioChange} />
            <div className='inputs'>
                <Input type='text' name='title' placeholder='Title' onChange={handleFieldChange} error={errors.title} />
                <Input type='textarea' name='description' placeholder='Description' onChange={handleFieldChange} error={errors.description} />
                <Button size='large' htmlType='submit' block>Save</Button>
            </div>
        </form>
    )
};

function validateServiceForm(values) {
    const errors = {};

    if (!values.description) {
        errors.description = 'Please leave a description of your need.';
    }

    if (!values.title) {
        errors.title = 'Please leave a title.';
    }

    return errors;
}

export default styled(ServiceForm)`
    .inputs {
        margin-top: 12px;
        > input, textarea {
            margin-bottom: 10px;
        }
    }
`;