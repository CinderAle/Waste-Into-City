import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import { createTrashcan } from '@/api/createTrashcan';
import { deleteTrashcan } from '@/api/deleteTrashcan';
import { useAction } from '@/hooks/useAction';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { TrashcanTypes } from '@/types/trashcanTypes';
import { UserRoles } from '@/types/userRoles';

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

const FORM_ENC_TYPE = 'multipart/form-data';
const BUTTON_SUBMIT_TYPE = 'submit';
const COMMON_BUTTON_TYPE = 'button';

const TrashcanEditor = () => {
    const [isShowingTypes, setShowingTypes] = useState(false);
    const userRole = useTypedSelector((state) => state.user.role);
    const trashcan = useTypedSelector((state) => state.menuSection.trashcan);
    const { hideSection } = useAction();

    const [selectedType, setSelectedType] = useState(TrashcanTypes.Common);
    const [volume, setVolume] = useState(0);
    const [fill, setFill] = useState('0');
    const [image, setImage] = useState<File>();

    useEffect(() => {
        if (trashcan) {
            setSelectedType(trashcan.type);
            setVolume(trashcan.volume);
            setFill(String(trashcan.fill));
        } else {
            setSelectedType(TrashcanTypes.Common);
            setVolume(0);
            setFill('0');
        }
    }, [trashcan]);

    const { startCoordinatesEditing, stopCoordinatesEditing } = useAction();
    const { isInEditingMode: isEditing, coordinates: coordinates } = useTypedSelector((state) => state.mapClick);

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
        if (trashcan) deleteTrashcan(trashcan);
        hideSection();
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        formData.set('volume', String(volume));
        formData.set('fill', fill);
        formData.set('type', selectedType);
        formData.set(`coordinates.lat`, String(coordinates.lat));
        formData.set(`coordinates.lng`, String(coordinates.lng));
        if (image) formData.set('image', image);

        if (!trashcan) {
            createTrashcan({ volume, fill: Number(fill), coordinates, type: selectedType }, image);
        }
    };

    const handleImageChange = (changeEvent: ChangeEvent<HTMLInputElement>) => {
        if (changeEvent.target.files) {
            setImage(changeEvent.target.files[0]);
        } else {
            //formData.set('image', image ?? '');
        }
    };

    return (
        <EditorContainer encType={FORM_ENC_TYPE} onSubmit={handleSubmit}>
            <UpperControls>
                <ObligatoryFields>
                    <ImageInput value={trashcan?.image} onChange={handleImageChange} />
                    <TypingFields>
                        <FillSlider
                            value={fill}
                            onChange={handleFillChange}
                            name="fill"
                            disabled={userRole === UserRoles.Guest}
                        />
                        <Input
                            label="Volume"
                            value={String(volume)}
                            onChange={handleVolumeChange}
                            name="volume"
                            disabled={userRole !== UserRoles.Admin}
                        />
                        <Select
                            label="Type"
                            onClick={handleClick}
                            readOnly
                            value={selectedType}
                            name="type"
                            disabled={userRole !== UserRoles.Admin}
                        />
                    </TypingFields>
                </ObligatoryFields>
                {isShowingTypes && <TypeSelect onSelect={handleSelect} />}
            </UpperControls>
            <ButtonsArea>
                {userRole === UserRoles.Admin && (
                    <SetLocationButton onClick={handleSetLocationClick} type={COMMON_BUTTON_TYPE}>
                        {isEditing ? 'Set Location' : 'Update Location'}
                    </SetLocationButton>
                )}
                {trashcan && userRole === UserRoles.Admin && (
                    <DeleteButton onClick={handleDeleteButtonClick} type={COMMON_BUTTON_TYPE}>
                        Delete
                    </DeleteButton>
                )}
                {userRole !== UserRoles.Guest && <SaveButton type={BUTTON_SUBMIT_TYPE}>Save changes</SaveButton>}
            </ButtonsArea>
        </EditorContainer>
    );
};

export default TrashcanEditor;
