import { useRef } from 'react';
import styled from 'styled-components';

import { COLORS } from '@/constants/colors';
import { InputProps } from '@/types/inputProps';

const Wrapper = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;

    width: 40px;
    height: 40px;

    display: flex;
    align-items: center;
    background-color: ${COLORS.WHITE};
    border-top-left-radius: 10px;
    cursor: pointer;
`;

const UploadSymbol = styled.p`
    width: 100%;
    text-align: center;
    color: ${COLORS.GREEN};
    font-size: 24px;
    font-weight: bold;
`;

export const UploadButton = ({ onChange, value, disabled }: InputProps) => {
    const inputRef = useRef<HTMLInputElement>(null!);

    const handleClick = () => {
        inputRef.current.click();
    };

    return (
        !disabled && (
            <Wrapper onClick={handleClick}>
                <UploadSymbol>+</UploadSymbol>
                <input ref={inputRef} type="file" onChange={onChange} value={value} hidden disabled={disabled} />
            </Wrapper>
        )
    );
};
