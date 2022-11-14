import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 0 auto;
    /* padding: 34px; */
    max-width: ${({ maxWidth }) => maxWidth ? maxWidth : '1104px'};
`;