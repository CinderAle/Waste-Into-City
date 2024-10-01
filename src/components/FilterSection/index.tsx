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
    const handleTypeSelect = (trashcanType: TrashcanTypes) => {
        console.log(trashcanType);
    };

    return (
        <FiltersContainer>
            <FieldsContainer>
                <InputPairContainer>
                    <FilterInput label="min volume l" />
                    <FilterInput label="max volume l" />
                </InputPairContainer>
                <InputPairContainer>
                    <FilterInput label="min fill %" />
                    <FilterInput label="max fill %" />
                </InputPairContainer>
                <TypeSelect onSelect={handleTypeSelect} />
            </FieldsContainer>
            <ButtonsContainer>
                <ClearFiltersButton>Clear all filters</ClearFiltersButton>
                <ApplyFiltersButton>Apply filters</ApplyFiltersButton>
            </ButtonsContainer>
        </FiltersContainer>
    );
};

export default FilterSection;
