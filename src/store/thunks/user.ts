import { createAsyncThunk } from '@reduxjs/toolkit';

import { signIn } from '@/api/signIn';
import { signOut } from '@/api/signOut';
import { UserRoles } from '@/types/userRoles';

export const signIntoUserAccount = createAsyncThunk(
    'user/signIn',
    async (logs: { login: string; password: string }, { rejectWithValue }) => {
        const user = await signIn(logs.login, logs.password);
        return user.role !== UserRoles.Guest ? user : rejectWithValue(user);
    }
);

export const signOutUserAccount = createAsyncThunk('user/signOut', async (_, { rejectWithValue }) => {
    const isSuccessful = await signOut();
    return isSuccessful || rejectWithValue(isSuccessful);
});
