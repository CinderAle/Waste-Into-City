import { useEffect } from 'react';
import { YMapComponentsProvider } from 'ymap3-components';

import { checkAuth } from './api/checkAuth';
import ErrorBoundary from './components/ErrorBoundary';
import { API } from './constants/api';
import { useAction } from './hooks/useAction';
import { useTypedSelector } from './hooks/useTypedSelector';
import Admin from './pages/Admin';
import { UserRoles } from './types/userRoles';

function App() {
    const userRole = useTypedSelector((state) => state.user.role);
    const { signOutUserAccount } = useAction();

    useEffect(() => {
        if (userRole !== UserRoles.Guest) {
            checkAuth().then((isRelevant) => isRelevant || signOutUserAccount());
        }
    }, [userRole]);

    return (
        <ErrorBoundary>
            <YMapComponentsProvider apiKey={API.YMAPS_KEY} lang={API.YMAPS_LANG}>
                <Admin />
            </YMapComponentsProvider>
        </ErrorBoundary>
    );
}

export default App;
