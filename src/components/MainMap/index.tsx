import { YMap as YmapComponent, YMapLocationRequest } from '@yandex/ymaps3-types';
import { useEffect, useRef } from 'react';
import { YMap, YMapDefaultFeaturesLayer, YMapDefaultSchemeLayer } from 'ymap3-components';

import { useAction } from '@/hooks/useAction';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { Trashcan } from '@/types/trashcan';
import { TrashcanTypes } from '@/types/trashcanTypes';

import EditPositionMarker from '../EditPositionMarker';
import TrashcanEditor from '../TrashcanEditor';
import TrashcanMarker from '../TrashcanMarker';
import { MapContainer } from './styles';

const trashcans: Trashcan[] = [
    new Trashcan('1', { lng: 27.5947648, lat: 53.9108842 }, TrashcanTypes.Common, 0, 0, ''),
    new Trashcan('2', { lng: 27.5945648, lat: 53.9108842 }, TrashcanTypes.Common, 0, 0, ''),
    new Trashcan('3', { lng: 27.5949648, lat: 53.9108842 }, TrashcanTypes.Common, 0, 0, ''),
];

const defaultLocation: YMapLocationRequest = {
    center: [27.5947648, 53.9108842],
    zoom: 18,
};

const MainMap = () => {
    const ymapRef = useRef<YmapComponent>(null);
    const { setCoordinates } = useAction();
    const isInEditingMode = useTypedSelector((state) => state.mapClick.isInEditingMode);
    const currentSection = useTypedSelector((state) => state.menuSection.section);

    useEffect(() => {
        if (!isInEditingMode && ymapRef.current && currentSection === TrashcanEditor) {
            const center = ymapRef.current.center;
            setCoordinates({ lng: center[0], lat: center[1] });
        }
    }, [isInEditingMode]);

    return (
        <MapContainer>
            <YMap ref={ymapRef} location={defaultLocation} theme="light">
                <YMapDefaultSchemeLayer />
                <YMapDefaultFeaturesLayer />
                {trashcans.map((trashcan) => (
                    <TrashcanMarker key={trashcan.id} trashcan={trashcan} />
                ))}
                {currentSection === TrashcanEditor && <EditPositionMarker />}
            </YMap>
        </MapContainer>
    );
};

export default MainMap;
