import React from 'react'
import styled from 'styled-components'

const UnstyledCard = ({ className, title, description, icon }) => {
  return (
    <div className={className}>
        <span class="material-icons-outlined">{icon}</span>
        <h3>
            <strong>{title}</strong>
        </h3>
        <p>{description}</p>
    </div>
  )
}

const StyledCard = styled(UnstyledCard)`
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    > span {
        font-size: 48px;
    }
    > p {
        text-align: center;
    }
`;

function Card(props){
    return <StyledCard {...props} />
}

export default Card