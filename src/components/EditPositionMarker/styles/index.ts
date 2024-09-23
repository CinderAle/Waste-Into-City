import styled from 'styled-components';

export const MarkerContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    z-index: 1;
    pointer-events: none;
`;

export const Marker = styled.div`
    position: relative;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: red;
`;
