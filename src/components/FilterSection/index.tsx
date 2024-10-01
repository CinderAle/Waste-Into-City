import { ChangeEvent, useState } from 'react';

import { TrashcanTypes } from '@/types/trashcanTypes';

import TypeSelect from '../TypeSelect';
import {
    ApplyFiltersButton,
    ButtonsContainer,
    ClearFiltersButton,
    FieldsContainer,
    FilterInput,
    FiltersContainer,
    InputPairContainer,
} from './styled';

const FilterSection = () => {
    const [minVolume, setMinVolume] = useState('');
    const [maxVolume, setMaxVolume] = useState('');
    const [minFill, setMinFill] = useState('');
    const [maxFill, setMaxFill] = useState('');
    const [selectedTypes, setSelectedTypes] = useState<Set<TrashcanTypes>>(new Set());

    const handleTypeSelect = (trashcanType: TrashcanTypes) => {
        if (selectedTypes.has(trashcanType)) {
            selectedTypes.delete(trashcanType);
        } else {
            selectedTypes.add(trashcanType);
        }
        setSelectedTypes(new Set(selectedTypes));
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>, action: (value: string) => void) => {
        action(event.currentTarget.value);
    };

    const handleClearFilters = () => {
        setMinVolume('');
        setMaxVolume('');
        setMinFill('');
        setMaxFill('');
        setSelectedTypes(new Set());
    };

    const handleApplyFilters = () => {
        console.log(minVolume, maxVolume, minFill, maxFill, selectedTypes);
    };

    return (
        <FiltersContainer>
            <FieldsContainer>
                <InputPairContainer>
                    <FilterInput
                        label="min volume l"
                        value={minVolume}
                        onChange={(e) => handleInputChange(e, setMinVolume)}
                    />
                    <FilterInput
                        label="max volume l"
                        value={maxVolume}
                        onChange={(e) => handleInputChange(e, setMaxVolume)}
                    />
                </InputPairContainer>
                <InputPairContainer>
                    <FilterInput
                        label="min fill %"
                        value={minFill}
                        onChange={(e) => handleInputChange(e, setMinFill)}
                    />
                    <FilterInput
                        label="max fill %"
                        value={maxFill}
                        onChange={(e) => handleInputChange(e, setMaxFill)}
                    />
                </InputPairContainer>
                <TypeSelect onSelect={handleTypeSelect} selection={selectedTypes} />
            </FieldsContainer>
            <ButtonsContainer>
                <ClearFiltersButton onClick={handleClearFilters}>Clear all filters</ClearFiltersButton>
                <ApplyFiltersButton onClick={handleApplyFilters}>Apply filters</ApplyFiltersButton>
            </ButtonsContainer>
        </FiltersContainer>
    );
};

export default FilterSection;
