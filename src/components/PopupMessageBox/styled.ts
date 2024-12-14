import styled from 'styled-components';

import { COLORS } from '@/constants/colors';

export const Container = styled.div`
    width: 300px;
    padding: 10px 15px;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: ${COLORS.WHITE};
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`;

export const CloseButton = styled.button`
    display: block;
    background-color: ${COLORS.TRANSPARENT};
    border: none;
    cursor: pointer;
    margin: 0;
    padding: 0;
    border-radius: 5px;
    transition: 0.1s linear;

    img {
        width: 20px;
    }

    &:hover {
        background-color: #00000020;
    }
`;

export const BaseMessage = styled.h3`
    width: 100%;
    margin: 5px 0;
    text-align: left;
    padding: 0 10px;
    color: ${COLORS.BLACK};
    box-sizing: border-box;
    word-break: break-word;
`;

export const ErrorMessage = styled.h3`
    width: 100%;
    margin: 5px 0;
    text-align: left;
    padding: 0 10px;
    color: ${COLORS.RED};
    box-sizing: border-box;
    word-break: break-word;
`;
