import styled from 'styled-components';

import { PopupMessageBox } from '@/components/PopupMessageBox';
import { COLORS } from '@/constants/colors';

export const Controls = styled.section`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    flex-wrap: nowrap;
    height: 100vh;
    background-color: ${COLORS.WHITE};
    border-bottom-right-radius: 15px;
    border-top-right-radius: 15px;
    box-shadow: 1px 0 10px ${COLORS.BLACK};
    overflow: hidden;
`;

export const PopupMessage = styled(PopupMessageBox)`
    position: absolute;
    right: 30px;
    bottom: 30px;
    z-index: 1;
`;
