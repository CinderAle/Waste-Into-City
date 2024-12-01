import { createAsyncThunk } from '@reduxjs/toolkit';

import { signIn } from '@/api/signIn';
import { UserRoles } from '@/types/userRoles';

export const signIntoUserAccount = createAsyncThunk(
    'user/signIn',
    async (logs: { login: string; password: string }, { rejectWithValue }) => {
        const user = await signIn(logs.login, logs.password);
        return user.role !== UserRoles.Guest ? user : rejectWithValue(user);
    }
);
