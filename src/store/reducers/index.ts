import { combineReducers } from 'redux';

import { mapClickReducer } from './mapClickReducer';

export const rootReducer = combineReducers({
    mapClick: mapClickReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
