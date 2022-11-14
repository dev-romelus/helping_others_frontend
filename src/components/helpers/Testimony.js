import React from 'react'
import styled from 'styled-components'
import { Avatar } from 'antd';


const UnstyledTestimony = ({ className, photo, name, description }) => {
  return (
    <div className={className}>
        <Avatar size={142} src={photo} />
        <h2>
            <stron>
                {name}
            </stron>
        </h2>
        <p>{description}</p>
    </div>
  )
}

const StyledTestimony = styled(UnstyledTestimony)`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    text-align: center;
    width: 100%;
    padding: 12px;
    height: 322px;
`;

function Testimony(props) {
    return <StyledTestimony {...props} />
}

export default Testimony;