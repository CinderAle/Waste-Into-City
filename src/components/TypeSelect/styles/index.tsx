import { ReactNode } from 'react';
import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

import { COLORS } from '@/constants/colors';

type ContainerProps = {
    children?: ReactNode;
};

type TypedContainerProps = ContainerProps & {
    onClick?: () => void;
    icon?: string;
};

const SelectContainer = styled.div`
    margin-top: 20px;
    width: 100%;
    height: 300px;
    border: 2px solid ${COLORS.NEUTRAL_GRAY};
    padding: 10px;
    border-radius: 15px;
    fill: red;
`;

const TrashcanTypeContainer = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    align-items: center;
    color: ${COLORS.NEUTRAL_GRAY};
    padding-left: 10px;
`;

const TrashcanTypeText = styled.p`
    display: block;
    margin-left: 10px;
    font-size: 20px;
`;

const TrashcanTypeIcon = styled.div`
    width: 55px;
    height: 55px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ScrollbarContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 7px;
        left: -10px;
        border-radius: 4px;
        background-color: ${COLORS.TRANSPARENT};
    }
    &::-webkit-scrollbar-thumb {
        background-color: ${COLORS.GREEN};
        border-radius: 4px;
        cursor: pointer;
    }
`;

export const Container = ({ children }: ContainerProps) => {
    return (
        <SelectContainer>
            <ScrollbarContainer>{children}</ScrollbarContainer>
        </SelectContainer>
    );
};

export const TrashcanType = ({ children, onClick, icon }: TypedContainerProps) => {
    return (
        <TrashcanTypeContainer onClick={onClick}>
            <TrashcanTypeIcon>
                <ReactSVG
                    src={`src/assets/icons/svg/trashcanTypes/${icon?.toLowerCase()}.svg`}
                    style={{ width: '40px', height: '40px' }}
                />
            </TrashcanTypeIcon>
            <TrashcanTypeText>{children}</TrashcanTypeText>
        </TrashcanTypeContainer>
    );
};
