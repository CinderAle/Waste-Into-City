import styled from 'styled-components';

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

export const SetLocationButton = styled.button`
    display: block;
    width: 100%;
    margin-top: 10px;
`;

export const SaveButton = styled.button`
    display: block;
    width: 100%;
    margin-top: 10px;
`;

export { Input } from './input';
