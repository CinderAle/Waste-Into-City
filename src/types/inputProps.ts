import { ChangeEvent } from 'react';

export type InputProps = {
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onClick?: () => void;
    label?: string;
    value?: string;
    readOnly?: boolean;
};
