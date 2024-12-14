import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type PopupMessageState = {
    message: string;
    isError: boolean;
    isDisplayed: boolean;
};

const initialState: PopupMessageState = {
    message: '',
    isError: false,
    isDisplayed: false,
};

export const popupMessageSlice = createSlice({
    name: 'popupMessage',
    initialState,
    reducers: {
        setBasicMessage(state: PopupMessageState, { payload }: PayloadAction<string>) {
            state.message = payload;
            state.isError = false;
            state.isDisplayed = true;
        },
        setErrorMessage(state: PopupMessageState, { payload }: PayloadAction<string>) {
            state.message = payload;
            state.isError = true;
            state.isDisplayed = true;
        },
        hideMessage(state: PopupMessageState) {
            state.isDisplayed = initialState.isDisplayed;
            state.message = initialState.message;
            state.isError = initialState.isError;
        },
    },
});
