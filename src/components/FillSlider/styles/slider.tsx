import styled from 'styled-components';

import { COLORS } from '@/constants/colors';
import { InputProps } from '@/types/inputProps';

const ThumbStyle = `
    width: 10px;
    height: 30px;
    border-radius: 5px;
    background-color: ${COLORS.GREEN};
    border: none;
    cursor: pointer;
`;

const SliderInput = styled.input<{ $value: number }>`
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 10px;
    border-radius: 5px;
    outline: none;
    background: linear-gradient(
        to right,
        ${COLORS.GREEN} ${(props) => props.$value}%,
        ${COLORS.NEUTRAL_GRAY} ${(props) => props.$value}%
    );

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        ${ThumbStyle}
    }

    &::-moz-range-thumb {
        ${ThumbStyle}
    }
`;

export const Slider = ({ onChange, value }: InputProps) => {
    return <SliderInput type="range" onChange={onChange} $value={Number(value)} value={value} />;
};
