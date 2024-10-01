import { TrashcanTypes } from '@/types/trashcanTypes';

import { Container, TrashcanType } from './styles';

type Props = {
    onSelect: (trashcanType: TrashcanTypes) => void;
    selection?: Set<TrashcanTypes>;
};

const TypeSelect = ({ onSelect, selection }: Props) => {
    const handleClick = (trashcanType: TrashcanTypes) => {
        onSelect(trashcanType);
    };

    return (
        <Container>
            {Object.keys(TrashcanTypes)
                .filter((key) => isNaN(Number(key)))
                .map((trashcanType, index) => (
                    <TrashcanType
                        key={index}
                        onClick={() => handleClick(TrashcanTypes[trashcanType as keyof typeof TrashcanTypes])}
                        icon={trashcanType}
                        defaultSelected={selection?.has(TrashcanTypes[trashcanType as keyof typeof TrashcanTypes])}
                    >
                        {trashcanType}
                    </TrashcanType>
                ))}
        </Container>
    );
};

export default TypeSelect;
