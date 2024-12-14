import styled from 'styled-components';

import { COLORS } from '@/constants/colors';

export const Container = styled.div`
    width: 250px;
    padding: 5px 5px;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: ${COLORS.WHITE};
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export const CloseButton = styled.button`
    display: block;
    background-color: ${COLORS.TRANSPARENT};
    border: none;
    cursor: pointer;
    margin: 0;
    padding: 0;
    img {
        width: 20px;
    }
`;

export const BaseMessage = styled.h3`
    width: 100%;
    margin: 5px 0;
    text-align: left;
    padding: 0 10px;
    color: ${COLORS.BLACK};
    box-sizing: border-box;
`;

export const ErrorMessage = styled.h3`
    width: 100%;
    margin: 5px 0;
    text-align: left;
    padding: 0 10px;
    color: ${COLORS.RED};
    box-sizing: border-box;
`;
