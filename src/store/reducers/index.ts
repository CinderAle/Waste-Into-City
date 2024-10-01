import { combineReducers } from 'redux';

import { mapClickReducer } from './mapClickReducer';
import { menuSectionReducer } from './menuSectionReducer';

export const rootReducer = combineReducers({
    mapClick: mapClickReducer,
    menuSection: menuSectionReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
