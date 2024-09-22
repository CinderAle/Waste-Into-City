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
    UpperControls,
} from './styles';

const TrashcanEditor = () => {
    const handleSelect = (trashcanType: TrashcanTypes) => {
        console.log(trashcanType);
    };

    return (
        <EditorContainer>
            <UpperControls>
                <ObligatoryFields>
                    <ImageInput />
                    <TypingFields>
                        <FillSlider />
                        <Input label="Volume" />
                        <Input label="Type" />
                    </TypingFields>
                </ObligatoryFields>
                <TypeSelect onSelect={handleSelect} />
            </UpperControls>
            <ButtonsArea>
                <SetLocationButton>Set Location</SetLocationButton>
                <SaveButton>Save changes</SaveButton>
            </ButtonsArea>
        </EditorContainer>
    );
};

export default TrashcanEditor;
