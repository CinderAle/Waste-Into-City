import { useState } from 'react';
import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

import arrowIcon from '@/assets/icons/svg/closeSectionIcon.svg';
import { COLORS } from '@/constants/colors';
import { InputProps } from '@/types/inputProps';

const InputField = styled.input`
    width: 100%;
    padding: 5px 7px;
    outline: none;
    border: 2px solid ${COLORS.NEUTRAL_GRAY};
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
`;

const InputLabel = styled.label`
    font-size: 16px;
    position: absolute;
    top: 0;
    left: 20px;
    background-color: ${COLORS.WHITE};
    padding: 0 5px;
    color: ${COLORS.NEUTRAL_GRAY};
`;

const SelectIcon = styled.div<{ $rotated: boolean }>`
    position: absolute;
    right: 8px;
    top: 16px;
    transform: rotate(${(props) => (props.$rotated ? '90' : '-90')}deg);
    fill: ${(props) => (props.$rotated ? COLORS.GREEN : COLORS.NEUTRAL_GRAY)};
    transition: 0.1s linear;
`;

const SelectWrapper = styled(InputWrapper)`
    cursor: pointer;
`;

const SelectField = styled(InputField)`
    cursor: pointer;
`;

export const Input = ({ label, value, onClick, onChange, readOnly, className }: InputProps) => {
    return (
        <InputWrapper className={className}>
            <InputLabel>{label}</InputLabel>
            <InputField value={value} onClick={onClick} onChange={onChange} readOnly={readOnly} />
        </InputWrapper>
    );
};

export const Select = ({ label, value, onClick, onChange, readOnly }: InputProps) => {
    const [isOpen, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!isOpen);
        if (onClick) {
            onClick();
        }
    };

    return (
        <SelectWrapper onClick={handleClick}>
            <InputLabel>{label}</InputLabel>
            <SelectIcon $rotated={isOpen}>
                <ReactSVG src={arrowIcon} />
            </SelectIcon>
            <SelectField value={value} onChange={onChange} readOnly={readOnly} />
        </SelectWrapper>
    );
};
