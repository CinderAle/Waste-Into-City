import { ChangeEvent, useEffect, useState } from 'react';

import { useAction } from '@/hooks/useAction';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { TrashcanTypes } from '@/types/trashcanTypes';

import FillSlider from '../FillSlider';
import ImageInput from '../ImageInput';
import TypeSelect from '../TypeSelect';
import {
    ButtonsArea,
    DeleteButton,
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
    const trashcan = useTypedSelector((state) => state.menuSection.trashcan);

    const [selectedType, setSelectedType] = useState(TrashcanTypes.Common);
    const [volume, setVolume] = useState(0);
    const [fill, setFill] = useState('0');

    useEffect(() => {
        if (trashcan) {
            setSelectedType(trashcan.type);
            setVolume(trashcan.volume);
            setFill(String(trashcan.fill));
        }
    }, [trashcan]);

    const { startCoordinatesEditing, stopCoordinatesEditing } = useAction();
    const { isInEditingMode: isEditing } = useTypedSelector((state) => state.mapClick);

    const handleSelect = (trashcanType: TrashcanTypes) => {
        setSelectedType(trashcanType);
        setShowingTypes(false);
    };

    const handleVolumeChange = (event: ChangeEvent<HTMLInputElement>) => {
        setVolume(Number(event.currentTarget.value));
    };

    const handleFillChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFill(event.currentTarget.value);
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

    const handleDeleteButtonClick = () => {
        console.log('delete');
    };

    const handleSaveButtonClick = () => {
        console.log('save');
    };

    return (
        <EditorContainer>
            <UpperControls>
                <ObligatoryFields>
                    <ImageInput />
                    <TypingFields>
                        <FillSlider value={fill} onChange={handleFillChange} />
                        <Input label="Volume" value={String(volume)} onChange={handleVolumeChange} />
                        <Select label="Type" onClick={handleClick} readOnly value={selectedType} />
                    </TypingFields>
                </ObligatoryFields>
                {isShowingTypes && <TypeSelect onSelect={handleSelect} />}
            </UpperControls>
            <ButtonsArea>
                <SetLocationButton onClick={handleSetLocationClick}>
                    {isEditing ? 'Set Location' : 'Update Location'}
                </SetLocationButton>
                {trashcan && <DeleteButton onClick={handleDeleteButtonClick}>Delete</DeleteButton>}
                <SaveButton onClick={handleSaveButtonClick}>Save changes</SaveButton>
            </ButtonsArea>
        </EditorContainer>
    );
};

export default TrashcanEditor;
