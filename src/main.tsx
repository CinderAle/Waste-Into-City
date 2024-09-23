import '@/styles/index.css';

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App.tsx';
import { store } from './store/index.ts';

const persistor = persistStore(store);

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
);
