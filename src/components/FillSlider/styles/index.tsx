import styled from 'styled-components';

import { COLORS } from '@/constants/colors';

export { Slider } from './slider';

export const SliderContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;

export const SliderValue = styled.p`
    width: 35px;
    margin-left: 10px;
    display: block;
    font-size: 20px;
    color: ${COLORS.BLACK};
`;
