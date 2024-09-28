import { useEffect, useRef, useState } from 'react';

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
    const [selectedType, setSelectedType] = useState(TrashcanTypes.Common);
    const { startCoordinatesEditing, stopCoordinatesEditing } = useAction();
    const isEditing = useTypedSelector((state) => state.mapClick.isInEditingMode);
    const isAddEditor = useRef(trashcan === undefined);

    useEffect(() => {
        if (isAddEditor) {
            trashcan = new Trashcan('', { lat: 0, lng: 0 }, TrashcanTypes.Common, 0, 0, '');
        }
        setSelectedType(trashcan?.type ?? TrashcanTypes.Common);
    });

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

    const handleSaveButtonClick = () => {
        console.log();
    };

    return (
        <EditorContainer>
            <UpperControls>
                <ObligatoryFields>
                    <ImageInput />
                    <TypingFields>
                        <FillSlider value={trashcan?.fill} />
                        <Input label="Volume" value={String(trashcan?.volume)} />
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
