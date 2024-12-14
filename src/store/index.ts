import { configureStore } from '@reduxjs/toolkit';
import { PersistConfig } from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { thunk } from 'redux-thunk';

import { rootReducer } from './reducers';

const persistConfig: PersistConfig<typeof rootReducer> = {
    key: 'root',
    storage: storage,
    whitelist: ['user', 'trashcanFilter'],
};

const persistedReducer = persistReducer<any, any>(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(thunk),
});
