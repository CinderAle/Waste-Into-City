import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

import filterIcon from '@/assets/icons/svg/filterIcon.svg';
import { COLORS } from '@/constants/colors';
import { ButtonProps } from '@/types/buttonsProps';

export const SidebarContainer = styled.section`
    width: 100px;
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 1px 0 10px ${COLORS.BLACK};
`;

const SidebarButton = styled.button`
    width: 60px;
    height: 60px;
    border-radius: 10px;
    outline: none;
    border-width: 2px;
    border-style: solid;
    font-size: 32px;
    color: ${COLORS.WHITE};
    border-color: ${COLORS.WHITE};
    cursor: pointer;
    transition: 0.1s linear;
    margin: 10px 0;

    @media (hover: hover) {
        &:hover {
            background-color: ${COLORS.TRANSPARENT};
        }
    }
    @media (hover: none) {
        &:active {
            background-color: ${COLORS.TRANSPARENT};
        }
    }
`;

const StyledAddButton = styled(SidebarButton)`
    background-color: ${COLORS.GREEN};
    border-color: ${COLORS.GREEN};

    @media (hover: hover) {
        &:hover {
            color: ${COLORS.GREEN};
        }
    }
    @media (hover: none) {
        &:active {
            color: ${COLORS.GREEN};
        }
    }
`;

export const AddButton = () => {
    return <StyledAddButton>+</StyledAddButton>;
};

export const StyledFilterButton = styled(SidebarButton)`
    background-color: ${COLORS.GREEN};
    border-color: ${COLORS.GREEN};
`;

const StyledFilterIcon = styled.div`
    width: 100%;
    height: 100%;
    fill: ${COLORS.WHITE};
    transition: 0.1s linear;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (hover: hover) {
        &:hover {
            fill: ${COLORS.GREEN};
        }
    }
    @media (hover: none) {
        &:active {
            fill: ${COLORS.GREEN};
        }
    }
`;

export const FilterButton = ({ onClick }: ButtonProps) => {
    return (
        <StyledFilterButton onClick={onClick}>
            <StyledFilterIcon>
                <ReactSVG src={filterIcon} style={{ height: '32px' }} />
            </StyledFilterIcon>
        </StyledFilterButton>
    );
};
