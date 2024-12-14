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

export const Marker = styled.img`
    position: relative;
    width: 50px;
    height: 50px;
    filter: invert(35%) sepia(100%) saturate(1000%) hue-rotate(360deg);
`;
