import { combineReducers } from 'redux';

import { userSlice } from '../slices/userSlice';
import { mapClickReducer } from './mapClickReducer';
import { menuSectionReducer } from './menuSectionReducer';

export const rootReducer = combineReducers({
    mapClick: mapClickReducer,
    menuSection: menuSectionReducer,
    user: userSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
