import { ChangeEvent, useState } from 'react';

import { ImagePreview, InputContainer, UploadButton } from './styles';

type Props = {
    value?: string;
    onChange?: (changeEvent: ChangeEvent<HTMLInputElement>) => void;
};

const ImageInput = ({ value, onChange }: Props) => {
    const [image, setImage] = useState<string>(value ?? '');

    const handleChange = (changeEvent: ChangeEvent<HTMLInputElement>) => {
        if (changeEvent.target.files !== null) setImage(URL.createObjectURL(changeEvent.target.files[0]));
        onChange?.(changeEvent);
    };

    return (
        <InputContainer>
            <ImagePreview src={image} />
            <UploadButton onChange={handleChange} value={value} />
        </InputContainer>
    );
};

export default ImageInput;
