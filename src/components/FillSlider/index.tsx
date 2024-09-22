import { ChangeEvent, useState } from 'react';

import { Slider, SliderContainer, SliderValue } from './styles';

const FillSlider = () => {
    const [percents, setPercents] = useState(0);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPercents(Number(e.currentTarget.value));
    };

    return (
        <SliderContainer>
            <Slider onChange={handleChange} value={String(percents)} />
            <SliderValue>{percents}%</SliderValue>
        </SliderContainer>
    );
};

export default FillSlider;
