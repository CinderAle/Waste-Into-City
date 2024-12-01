import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from '@/types/user';
import { UserRoles } from '@/types/userRoles';

import { signIntoUserAccount } from '../thunks/user';

type UserState = User & {
    isLoading: boolean;
    isError: boolean;
};

const initialState: UserState = {
    login: '',
    role: UserRoles.Guest,
    isLoading: false,
    isError: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state: UserState, { payload: { login, role } }: PayloadAction<User>) {
            state.login = login;
            state.role = role;
        },
        signOut(state: UserState) {
            state.role = initialState.role;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            signIntoUserAccount.fulfilled,
            (state: UserState, { payload: { login, role } }: PayloadAction<User>) => {
                state.login = login;
                state.role = role;
                state.isLoading = false;
            }
        );
        builder.addCase(signIntoUserAccount.pending, (state: UserState) => {
            state.isLoading = true;
        });
        builder.addCase(signIntoUserAccount.rejected, (state: UserState) => {
            state.isError = true;
        });
    },
});
