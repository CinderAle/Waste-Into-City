import { useState } from 'react';

import { SectionContainer } from './styles';

const Section = () => {
    const [isHidden, setHidden] = useState(false);
    const hideSection = () => {
        setHidden(true);
    };
    return (
        <SectionContainer $hidden={isHidden}>
            <button onClick={hideSection}>Hide</button>
        </SectionContainer>
    );
};

export default Section;
