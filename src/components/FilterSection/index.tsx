import { ChangeEvent, useState } from 'react';

import { useAction } from '@/hooks/useAction';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { TrashcanFilter } from '@/types/trashcanFilter';
import { TrashcanTypes } from '@/types/trashcanTypes';

import TypeSelect from '../TypeSelect';
import * as S from './styled';

type FilterFields = {
    types: Set<TrashcanTypes>;
    minVolume: string;
    maxVolume: string;
    minFill: string;
    maxFill: string;
};

const areAllNumeric = (...fields: string[]): boolean => {
    return fields.filter((field) => !isNaN(Number(field))).length === fields.length;
};

const filterToFields = (filters: TrashcanFilter): FilterFields => {
    return {
        types: new Set(filters.type || []),
        minVolume: String(filters.volume?.$gt || ''),
        maxVolume: String(filters.volume?.$lt || ''),
        minFill: String(filters.fill?.$gt || ''),
        maxFill: String(filters.fill?.$lt || ''),
    };
};

const FilterSection = () => {
    const trashcanFilter = useTypedSelector((state) => state.trashcanFilter);
    const { setTrashcanFilter, clearTrashcanFilter } = useAction();
    const [{ types, minVolume, maxVolume, minFill, maxFill }, setFilterFields] = useState<FilterFields>(
        filterToFields(trashcanFilter)
    );
    const [error, setError] = useState('');

    const handleTypeSelect = (trashcanType: TrashcanTypes) => {
        if (types.has(trashcanType)) {
            setFilterFields((fields) => {
                fields.types.delete(trashcanType);
                return { ...fields, types: new Set([...fields.types]) };
            });
        } else {
            setFilterFields((fields) => ({ ...fields, types: new Set([...fields.types, trashcanType]) }));
        }
    };

    const handleInputChange = (property: keyof FilterFields) => (event: ChangeEvent<HTMLInputElement>) => {
        setFilterFields((fields) => ({ ...fields, [property]: event.target.value }));
        setError('');
    };

    const handleClearFilters = () => {
        clearTrashcanFilter();
        setError('');
    };

    const handleApplyFilters = () => {
        if (areAllNumeric(minVolume, maxVolume, minFill, maxFill)) {
            setTrashcanFilter({
                type: [...types],
                volume: { $gt: Number(minVolume), $lt: Number(maxVolume) },
                fill: { $gt: Number(minFill), $lt: Number(maxFill) },
            });
        } else {
            setError('All fields must be numeric!');
        }
    };

    return (
        <S.FiltersContainer>
            <S.FieldsContainer>
                <S.InputPairContainer>
                    <S.FilterInput
                        label="Min volume, L"
                        value={String(minVolume)}
                        onChange={handleInputChange('minVolume')}
                    />
                    <S.FilterInput
                        label="Max volume, L"
                        value={String(maxVolume)}
                        onChange={handleInputChange('maxVolume')}
                    />
                </S.InputPairContainer>
                <S.InputPairContainer>
                    <S.FilterInput label="Min fill, %" value={minFill} onChange={handleInputChange('minFill')} />
                    <S.FilterInput label="Max fill, %" value={maxFill} onChange={handleInputChange('maxFill')} />
                </S.InputPairContainer>
                <p>{error}</p>
                <TypeSelect onSelect={handleTypeSelect} selection={types} />
            </S.FieldsContainer>
            <S.ButtonsContainer>
                <S.ClearFiltersButton onClick={handleClearFilters}>Clear all filters</S.ClearFiltersButton>
                <S.ApplyFiltersButton onClick={handleApplyFilters}>Apply filters</S.ApplyFiltersButton>
            </S.ButtonsContainer>
        </S.FiltersContainer>
    );
};

export default FilterSection;
