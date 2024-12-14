import { ChangeEvent } from 'react';

export type InputProps = {
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onClick?: () => void;
    type?: string;
    label?: string;
    value?: string | undefined;
    readOnly?: boolean;
    className?: string;
    name?: string;
    disabled?: boolean;
};
