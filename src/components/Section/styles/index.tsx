import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

import closeSectionIcon from '@/assets/icons/svg/closeSectionIcon.svg';
import { COLORS } from '@/constants/colors';
import { ButtonProps } from '@/types/buttonsProps';

export const SectionContainer = styled.div<{ $hidden?: boolean }>`
    transition: 0.2s linear;
    display: flex;
    flex-direction: column;
    width: ${(props) => (props.$hidden ? '0' : '450px')};
    padding: ${(props) => (props.$hidden ? '0' : '20px')};
`;

const StyledButton = styled.button`
    background-color: ${COLORS.TRANSPARENT};
    border: none;
    text-align: left;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    cursor: pointer;
    fill: ${COLORS.GREEN};
    width: fit-content;
    min-width: fit-content;
`;
const ButtonText = styled.p`
    font-size: 22px;
    font-weight: bold;
    margin-left: 12px;
    color: ${COLORS.BLACK};
`;

export const CloseSectionButton = ({ onClick }: ButtonProps) => {
    return (
        <StyledButton onClick={onClick}>
            <ReactSVG src={closeSectionIcon} style={{ height: '24px' }} />
            <ButtonText>Go Back</ButtonText>
        </StyledButton>
    );
};
