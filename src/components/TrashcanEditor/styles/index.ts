import styled from 'styled-components';

import { COLORS } from '@/constants/colors';

export const EditorContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const ObligatoryFields = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const UpperControls = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const TypingFields = styled.div`
    width: 200px;
`;

export const ButtonsArea = styled.div`
    width: 100%;
`;

const EditorButton = styled.button`
    display: block;
    width: 100%;
    margin-top: 10px;
    font-size: 24px;
    padding: 5px 0;
    outline: none;
    border-radius: 10px;
    color: ${COLORS.WHITE};
    cursor: pointer;
    border: 2px solid ${COLORS.TRANSPARENT};

    &:hover {
        background-color: ${COLORS.TRANSPARENT};
    }

    transition: 0.1s linear;
`;

export const SetLocationButton = styled(EditorButton)`
    background-color: ${COLORS.GREEN};
    border-color: ${COLORS.GREEN};

    &:hover {
        color: ${COLORS.GREEN};
    }
`;

export const SaveButton = styled(EditorButton)`
    background-color: ${COLORS.YELLOW};
    border-color: ${COLORS.YELLOW};

    &:hover {
        color: ${COLORS.YELLOW};
    }
`;

export { Input, Select } from './input';
