import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Button, Select } from 'antd';
import styled from 'styled-components';

import servicesAction from '../../store/actions/services.action';
import Input from '../helpers/Input';
import useForm from '../hooks/useForm';
import { serviceStatuses, servicesType } from '../../utils/enums';

const Service = ({ className }) => {
    const dispatch = useDispatch();
    const [display, setDisplay] = useState(false);
    const { values, errors, handleSubmit, handleFieldChange, handleSelectChange } = useForm(onSubmit, validateUpdateServiceForm);
    const { service, loading } = useSelector((state) => state.servicesState);
    const { serviceId } = useParams();

    function onSubmit() {
        dispatch(servicesAction.updateService({ ...service, ...values }, { success: () => setDisplay(false) }))
    }

    useEffect(() => {
        if (serviceId) dispatch(servicesAction.getService(serviceId));
    }, [dispatch, serviceId]);

    return service ? (
        <div className={className}>
            {display ? (
                <div className='update_service'>
                    <h2>Update service</h2>
                    <form onSubmit={handleSubmit}>
                        <Input defaultValue={service.title} type='text' name='title' placeholder='Title' onChange={handleFieldChange} error={errors.title} />
                        <Input defaultValue={service.description} type='textarea' name='description' placeholder='Enter your last name' onChange={handleFieldChange} error={errors.lastName} />
                        <Select 
                            size='large'
                            defaultValue={service.status} 
                            style={{ width: '100%' }}
                            onChange={(value) => handleSelectChange({ name: 'status', value })}
                            options={[
                                {
                                    label: serviceStatuses.IN_PROGRESS,
                                    value: 'IN_PROGRESS',
                                },
                                {
                                    label: serviceStatuses.SATISFIED,
                                    value: 'SATISFIED',
                                },
                            ]}
                        />
                        <Button onClick={() => setDisplay(!display)}>Cancel</Button>
                        <Button htmlType='submit' loading={loading}>Update service</Button>
                    </form>
                </div>
            ) : (
                <div className='service_info'>
                    <div className='edit'>
                        <h2>{service.title}</h2>
                        <span class='material-icons-outlined' onClick={() => setDisplay(true)}>edit</span>
                    </div>
                    <div className='info'>
                        <span>
                            <strong>Request type: </strong>
                            {servicesType[service.request_type]}
                        </span>
                        <span>
                            <strong>Description: </strong>
                            {service.description}
                        </span>
                        <span>
                            <strong>Status: </strong>
                            {serviceStatuses[service.status]}
                        </span>
                    </div>
                </div>
            )}
        </div>
    ) : <></>;
}

function validateUpdateServiceForm() {
    return {};
}

export default styled(Service)`
    max-width: 864px;
    margin: auto;
    padding: 12px;

    > .service_info {
        padding: 14px;
        > .edit {
            display: flex;
            align-items: center;
            justify-content: space-between;
            > span {
                cursor: pointer;
            }
        }
        > .info {
            display: flex;
            flex-direction: column;
            > span {
                line-height: 1.5;
            }
        }
    } 
    .update_service {
        padding: 14px;
        > form {
            > input, textarea {
                margin-bottom: 10px;
            }
            > button {
                margin-right: 10px;
            }
            > div {
                margin-bottom: 10px;
            }
        }
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;
