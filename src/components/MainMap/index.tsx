import { YMapLocationRequest } from '@yandex/ymaps3-types';
import { YMap, YMapDefaultFeaturesLayer,YMapDefaultSchemeLayer } from 'ymap3-components';

import { Trashcan } from '@/types/trashcan';
import { TrashcanTypes } from '@/types/trashcanTypes';

import TrashcanMarker from '../TrashcanMarker';

const trashcans: Trashcan[] = [
    new Trashcan('1', { lng: 27.5947648, lat: 53.9108842 }, TrashcanTypes.Common, 0, 0, ''),
    new Trashcan('2', { lng: 27.5945648, lat: 53.9108842 }, TrashcanTypes.Common, 0, 0, ''),
    new Trashcan('3', { lng: 27.5949648, lat: 53.9108842 }, TrashcanTypes.Common, 0, 0, ''),
];

const location: YMapLocationRequest = {
    center: [27.5947648, 53.9108842],
    zoom: 18,
};

const MainMap = () => {
    return (
        <div style={{ height: '100vh' }}>
            <YMap location={location} theme="dark">
                <YMapDefaultSchemeLayer />
                <YMapDefaultFeaturesLayer />
                {trashcans.map((trashcan) => (
                    <TrashcanMarker key={trashcan.id} trashcan={trashcan} />
                ))}
            </YMap>
        </div>
    );
};

export default MainMap;
