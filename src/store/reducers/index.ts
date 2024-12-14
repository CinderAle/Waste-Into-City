import { combineReducers } from 'redux';

import { popupMessageSlice } from '../slices/popupMessageSlice';
import { trashcanFilterSlice } from '../slices/trashcanFilterSlice';
import { userSlice } from '../slices/userSlice';
import { mapClickReducer } from './mapClickReducer';
import { menuSectionReducer } from './menuSectionReducer';

export const rootReducer = combineReducers({
    mapClick: mapClickReducer,
    menuSection: menuSectionReducer,
    popupMessage: popupMessageSlice.reducer,
    trashcanFilter: trashcanFilterSlice.reducer,
    user: userSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
