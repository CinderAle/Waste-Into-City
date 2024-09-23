import { useState } from 'react';

import { useAction } from '@/hooks/useAction';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { TrashcanTypes } from '@/types/trashcanTypes';

import FillSlider from '../FillSlider';
import ImageInput from '../ImageInput';
import TypeSelect from '../TypeSelect';
import {
    ButtonsArea,
    EditorContainer,
    Input,
    ObligatoryFields,
    SaveButton,
    Select,
    SetLocationButton,
    TypingFields,
    UpperControls,
} from './styles';

const TrashcanEditor = () => {
    const [isShowingTypes, setShowingTypes] = useState(false);
    const [selectedType, setSelectedType] = useState(TrashcanTypes.Common);
    const { startCoordinatesEditing, stopCoordinatesEditing } = useAction();
    const isEditing = useTypedSelector((state) => state.mapClick.isInEditingMode);

    const handleSelect = (trashcanType: TrashcanTypes) => {
        setSelectedType(trashcanType);
        setShowingTypes(false);
    };

    const handleClick = () => {
        setShowingTypes(!isShowingTypes);
    };

    const handleSetLocationClick = () => {
        if (isEditing) {
            stopCoordinatesEditing();
        } else {
            startCoordinatesEditing();
        }
    };

    return (
        <EditorContainer>
            <UpperControls>
                <ObligatoryFields>
                    <ImageInput />
                    <TypingFields>
                        <FillSlider />
                        <Input label="Volume" />
                        <Select label="Type" onClick={handleClick} readOnly value={selectedType} />
                    </TypingFields>
                </ObligatoryFields>
                {isShowingTypes && <TypeSelect onSelect={handleSelect} />}
            </UpperControls>
            <ButtonsArea>
                <SetLocationButton onClick={handleSetLocationClick}>
                    {isEditing ? 'Set Location' : 'Update Location'}
                </SetLocationButton>
                <SaveButton>Save changes</SaveButton>
            </ButtonsArea>
        </EditorContainer>
    );
};

export default TrashcanEditor;
