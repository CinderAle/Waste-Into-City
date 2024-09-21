import { YMapComponentsProvider } from 'ymap3-components';

import { API } from './constants/api';
import Admin from './pages/Admin';

function App() {
    return (
        <YMapComponentsProvider apiKey={API.YMAPS_KEY} lang={API.YMAPS_LANG}>
            <Admin />
        </YMapComponentsProvider>
    );
}

export default App;
