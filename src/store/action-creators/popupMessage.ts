import { popupMessageSlice } from '../slices/popupMessageSlice';

export const popupBasicMessage = popupMessageSlice.actions.setBasicMessage;
export const popupErrorMessage = popupMessageSlice.actions.setErrorMessage;
export const hidePopupMessage = popupMessageSlice.actions.hideMessage;
