import { createAsyncThunk } from '@reduxjs/toolkit';

import { getAllTrashcans } from '@/api/getAllTrashcans';
import { TrashcanFilter } from '@/types/trashcanFilter';

export const setTrashcanFilter = createAsyncThunk(
    'trashcanFilter/set',
    async ({ type, volume, fill }: TrashcanFilter, { rejectWithValue }) => {
        try {
            const actualFilter: TrashcanFilter = {
                type: type?.length ? type : undefined,
                volume: {
                    $gt: volume?.$gt ? volume.$gt : undefined,
                    $lt: volume?.$lt ? volume.$lt : undefined,
                },
                fill: {
                    $gt: fill?.$gt ? fill.$gt : undefined,
                    $lt: fill?.$lt ? fill.$lt : undefined,
                },
            };
            await getAllTrashcans(actualFilter);
            return actualFilter;
        } catch {
            return rejectWithValue(null);
        }
    }
);

export const clearTrashcanFilter = createAsyncThunk('trashcanFilter/clear', async (_, { rejectWithValue }) => {
    try {
        await getAllTrashcans();
        return {};
    } catch {
        return rejectWithValue(null);
    }
});
