import { ChangeEvent, useState } from 'react';

import { ImagePreview, InputContainer, UploadButton } from './styles';

const ImageInput = () => {
    const [image, setImage] = useState<string>();
    const handleChange = (changeEvent: ChangeEvent<HTMLInputElement>) => {
        if (changeEvent.target.files !== null) setImage(URL.createObjectURL(changeEvent.target.files[0]));
    };

    return (
        <InputContainer>
            <ImagePreview src={image} />
            <UploadButton onChange={handleChange} />
        </InputContainer>
    );
};

export default ImageInput;
