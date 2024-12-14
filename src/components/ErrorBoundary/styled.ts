import styled from 'styled-components';

import { COLORS } from '@/constants/colors';

export const Container = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${COLORS.NEUTRAL_GRAY};
`;

export const ErrorBlock = styled.section`
    background-color: ${COLORS.WHITE};
    width: 650px;
    padding: 25px;
    box-sizing: border-box;
    border-radius: 25px;
    box-shadow: 0 0 10px #000000;
`;

export const ErrorTitle = styled.h1`
    text-align: center;
    margin: 10px 0 25px;
    font-size: 42px;
    color: ${COLORS.RED};
`;

export const ErrorDescription = styled.p`
    font-size: 22px;
    text-align: center;
    word-break: break-word;
`;
