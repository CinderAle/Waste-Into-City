import { ChangeEvent, useState } from 'react';

import { useAction } from '@/hooks/useAction';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { Trashcan } from '@/types/trashcan';
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

type Props = {
    trashcan?: Trashcan;
};

const TrashcanEditor = ({ trashcan }: Props) => {
    const [isShowingTypes, setShowingTypes] = useState(false);
    //const isAddEditor = useRef(trashcan === undefined);

    const [selectedType, setSelectedType] = useState(trashcan?.type ?? TrashcanTypes.Common);
    const [volume, setVolume] = useState(trashcan?.volume ?? 0);
    const [fill, setFill] = useState(trashcan?.fill ?? 0);

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
        setFill(Number(event.currentTarget.value));
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

    const handleSaveButtonClick = () => {
        console.log();
    };

    return (
        <EditorContainer>
            <UpperControls>
                <ObligatoryFields>
                    <ImageInput />
                    <TypingFields>
                        <FillSlider value={String(fill)} onChange={handleFillChange} />
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
                <SaveButton onClick={handleSaveButtonClick}>Save changes</SaveButton>
            </ButtonsArea>
        </EditorContainer>
    );
};

export default TrashcanEditor;
