import styled from 'styled-components';

import { COLORS } from '@/constants/colors';
import { Input } from '@/styles/input';

export const FiltersContainer = styled.section`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
`;

export const FieldsContainer = styled.div``;

export const ButtonsContainer = styled.div``;

export const InputPairContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-betweeen;
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

const ButtonColors = (color: string) => `
    background-color: ${color};
    border-color: ${color};

    &:hover {
        color: ${color};
    }
`;

export const ClearFiltersButton = styled(EditorButton)`
    ${ButtonColors(COLORS.YELLOW)}
`;

export const ApplyFiltersButton = styled(EditorButton)`
    ${ButtonColors(COLORS.GREEN)}
`;

export const FilterInput = styled(Input)`
    width: 50%;
    margin: 0 5px;
`;
