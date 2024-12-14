import { combineReducers } from 'redux';

import { trashcanFilterSlice } from '../slices/trashcanFilterSlice';
import { userSlice } from '../slices/userSlice';
import { mapClickReducer } from './mapClickReducer';
import { menuSectionReducer } from './menuSectionReducer';

export const rootReducer = combineReducers({
    mapClick: mapClickReducer,
    menuSection: menuSectionReducer,
    trashcanFilter: trashcanFilterSlice.reducer,
    user: userSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
