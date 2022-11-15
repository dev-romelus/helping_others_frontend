import React, { useMemo, useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Table } from 'antd';
import { Link, } from 'react-router-dom';

import storage from '../../utils/storage';
import { serviceStatuses } from '../../utils/enums';

const MyRequests = ({ className }) => {
    const { services, loading } = useSelector((state) => state.servicesState);
    const [filteredInfo, setFilteredInfo] = useState({});
    const filteredServices = useMemo(() => services.filter(service => service.user_id === storage.getUserId()), [services])

    const handleChange = (_, filters) => setFilteredInfo(filters);

    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            sorter: true,
            width: '20%',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            sorter: true,
            width: '20%',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            render: (status) => serviceStatuses[status],
            filters: [
                {
                    text: serviceStatuses.IN_PROGRESS,
                    value: 'IN_PROGRESS',
                },
                {
                    text: serviceStatuses.SATISFIED,
                    value: 'SATISFIED',
                },
                {
                    text: serviceStatuses.EXPIRED,
                    value: 'EXPIRED',
                },
            ],
            filteredValue: filteredInfo.status || null,
            onFilter: (value, record) => record.status.includes(value),
            ellipsis: true,
            width: '20%',
        },
        {
            title: 'Action',
            dataIndex: 'operation',
            key: 'operation',
            render: (_, { id }) => (
                <Link to={`/service/${id}`}>See details</Link>
            ),
            width: '10%',
          },
    ];

    return (
        <div className={className}>
            <h2>My requests</h2>
            <Table columns={columns} dataSource={filteredServices} loading={loading} onChange={handleChange} />
        </div>
    )
}

export default styled(MyRequests)`
    border: 1px solid #dcdde2;
    border-radius: 4px;
    padding: 12px;
    width: 100%;
`;
