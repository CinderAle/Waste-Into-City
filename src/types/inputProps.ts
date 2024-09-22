import { ChangeEvent } from 'react';

export type InputProps = {
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    value?: string;
};
