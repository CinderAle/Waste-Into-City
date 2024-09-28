import { ChangeEvent, useState } from 'react';

import { Slider, SliderContainer, SliderValue } from './styles';

type Props = {
    value?: number;
};

const FillSlider = ({ value }: Props) => {
    const [percents, setPercents] = useState(value);

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
