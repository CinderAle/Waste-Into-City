import FillSlider from '../FillSlider';
import ImageInput from '../ImageInput';
import {
    ButtonsArea,
    EditorContainer,
    Input,
    ObligatoryFields,
    SaveButton,
    SetLocationButton,
    TypingFields,
} from './styles';

//Temporary comment

const TrashcanEditor = () => {
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
            <ButtonsArea>
                <SetLocationButton>Set Location</SetLocationButton>
                <SaveButton>Save changes</SaveButton>
            </ButtonsArea>
        </EditorContainer>
    );
};

export default TrashcanEditor;
