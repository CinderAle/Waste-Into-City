import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TrashcanFilter } from '@/types/trashcanFilter';

import { clearTrashcanFilter, setTrashcanFilter } from '../thunks/trashcanFilter';

type TrashcanFilterState = TrashcanFilter;

const initialState: TrashcanFilterState = {};

export const trashcanFilterSlice = createSlice({
    name: 'trashcanFilter',
    initialState,
    reducers: {
        setFilter(state: TrashcanFilterState, { payload: { type, volume, fill } }: PayloadAction<TrashcanFilter>) {
            state.type = type;
            state.volume = volume && {
                $gt: volume.$gt ? volume.$gt : undefined,
                $lt: volume.$lt ? volume.$lt : undefined,
            };
            state.fill = fill && {
                $gt: fill.$gt ? fill.$gt : undefined,
                $lt: fill.$lt ? fill.$lt : undefined,
            };
        },
        removeFilters(state: TrashcanFilterState) {
            state.type = initialState.type;
            state.volume = initialState.volume;
            state.fill = initialState.fill;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            setTrashcanFilter.fulfilled,
            (state: TrashcanFilterState, { payload: { type, volume, fill } }: PayloadAction<TrashcanFilter>) => {
                state.type = type;
                state.volume = volume;
                state.fill = fill;
            }
        );
        builder.addCase(clearTrashcanFilter.fulfilled, (_state: TrashcanFilterState) => {
            _state.type = initialState.type;
            _state.volume = initialState.volume;
            _state.fill = initialState.fill;
        });
    },
});
