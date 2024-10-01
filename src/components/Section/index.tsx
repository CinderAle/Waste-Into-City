import { useEffect, useState } from 'react';

import { useAction } from '@/hooks/useAction';
import { useTypedSelector } from '@/hooks/useTypedSelector';

import { CloseSectionButton, SectionContainer } from './styles';

const Section = () => {
    const [isHidden, setHidden] = useState(true);
    const OpenSection = useTypedSelector((state) => state.menuSection.section);
    const { hideSection } = useAction();

    useEffect(() => {
        setHidden(OpenSection === null);
    }, [OpenSection]);

    const handleSectionClose = () => {
        hideSection();
    };

    return (
        <SectionContainer $hidden={isHidden}>
            <CloseSectionButton onClick={handleSectionClose} />
            {OpenSection && <OpenSection />}
        </SectionContainer>
    );
};

export default Section;
