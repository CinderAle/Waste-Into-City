import styled from 'styled-components';

import { COLORS } from '@/constants/colors';
import { InputProps } from '@/types/inputProps';

const InputField = styled.input`
    width: 100%;
    padding: 5px 7px;
    outline: none;
    border: 2px solid ${COLORS.GRAY};
    background-color: ${COLORS.TRANSPARENT};
    color: ${COLORS.BLACK};
    margin: 10px 0;
    font-size: 20px;
    border-radius: 10px;

    &:focus {
        border-color: ${COLORS.GREEN};
    }
`;

const InputWrapper = styled.div`
    position: relative;
    width: 100%;
`;

const InputLabel = styled.label`
    font-size: 16px;
    position: absolute;
    top: 0;
    left: 20px;
    background-color: ${COLORS.WHITE};
    padding: 0 5px;
    color: ${COLORS.GRAY};
`;

export const Input = ({ label }: InputProps) => {
    return (
        <InputWrapper>
            <InputLabel>{label}</InputLabel>
            <InputField />
        </InputWrapper>
    );
};
