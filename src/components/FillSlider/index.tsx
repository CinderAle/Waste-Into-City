import { ChangeEvent, useEffect, useState } from 'react';

import { InputProps } from '@/types/inputProps';

import { Slider, SliderContainer, SliderValue } from './styles';

const FillSlider = ({ value, onChange, disabled }: InputProps) => {
    const [percents, setPercents] = useState(value);

    useEffect(() => {
        setPercents(value);
    }, [value]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPercents(e.currentTarget.value);
        if (onChange) onChange(e);
    };

    return (
        <SliderContainer>
            <Slider onChange={handleChange} value={String(percents)} disabled={disabled} />
            <SliderValue>{percents}%</SliderValue>
        </SliderContainer>
    );
};

export default FillSlider;
