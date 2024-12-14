import { ChangeEvent, useEffect, useState } from 'react';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { UserRoles } from '@/types/userRoles';

import { ImagePreview, InputContainer, UploadButton } from './styles';

type Props = {
    value?: string;
    onChange?: (changeEvent: ChangeEvent<HTMLInputElement>) => void;
};

const ImageInput = ({ value, onChange }: Props) => {
    const [preview, setPreview] = useState<string>(value ?? '');
    const userRole = useTypedSelector((state) => state.user.role);
    useEffect(() => {
        setPreview(value ?? '');
    }, [value]);

    const handleChange = (changeEvent: ChangeEvent<HTMLInputElement>) => {
        if (changeEvent.target.files !== null) {
            setPreview(URL.createObjectURL(changeEvent.target.files[0]));
        }
        onChange?.(changeEvent);
    };

    return (
        <InputContainer>
            <ImagePreview src={preview} />
            <UploadButton onChange={handleChange} disabled={userRole !== UserRoles.Admin} />
        </InputContainer>
    );
};

export default ImageInput;
