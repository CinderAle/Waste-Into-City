import { useState } from 'react';

import { CloseSectionButton, SectionContainer } from './styles';

const Section = () => {
    const [isHidden, setHidden] = useState(false);
    const hideSection = () => {
        setHidden(true);
    };
    return (
        <SectionContainer $hidden={isHidden}>
            <CloseSectionButton onClick={hideSection} />
        </SectionContainer>
    );
};

export default Section;
