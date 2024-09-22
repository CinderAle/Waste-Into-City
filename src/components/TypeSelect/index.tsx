import { TrashcanTypes } from '@/types/trashcanTypes';

import { Container, TrashcanType } from './styles';

type Props = {
    onSelect: (trashcanType: TrashcanTypes) => void;
};

const TypeSelect = ({ onSelect }: Props) => {
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
                    >
                        {trashcanType}
                    </TrashcanType>
                ))}
        </Container>
    );
};

export default TypeSelect;
