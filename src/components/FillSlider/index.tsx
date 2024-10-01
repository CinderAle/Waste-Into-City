import { ChangeEvent, useState } from 'react';

import { InputProps } from '@/types/inputProps';

import { Slider, SliderContainer, SliderValue } from './styles';

const FillSlider = ({ value, onChange }: InputProps) => {
    const [percents, setPercents] = useState(value);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPercents(e.currentTarget.value);
        if (onChange) onChange(e);
    };

    return (
        <SliderContainer>
            <Slider onChange={handleChange} value={String(percents)} />
            <SliderValue>{percents}%</SliderValue>
        </SliderContainer>
    );
};

export default FillSlider;
