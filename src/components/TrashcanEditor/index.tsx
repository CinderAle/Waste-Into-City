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
    SetLocationButton,
    TypingFields,
} from './styles';

const TrashcanEditor = () => {
    const handleSelect = (trashcanType: TrashcanTypes) => {
        console.log(trashcanType);
    };

    return (
        <EditorContainer>
            <ObligatoryFields>
                <ImageInput />
                <TypingFields>
                    <FillSlider />
                    <Input label="Volume" />
                    <Input label="Type" />
                </TypingFields>
            </ObligatoryFields>
            <TypeSelect onSelect={handleSelect} />
            <ButtonsArea>
                <SetLocationButton>Set Location</SetLocationButton>
                <SaveButton>Save changes</SaveButton>
            </ButtonsArea>
        </EditorContainer>
    );
};

export default TrashcanEditor;
