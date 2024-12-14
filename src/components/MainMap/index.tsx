import { YMap as YmapComponent, YMapLocationRequest } from '@yandex/ymaps3-types';
import { useEffect, useRef } from 'react';
import { YMap, YMapDefaultFeaturesLayer, YMapDefaultSchemeLayer } from 'ymap3-components';

import { getAllTrashcans } from '@/api/getAllTrashcans';
import { useAction } from '@/hooks/useAction';
import { useConnectionSocket } from '@/hooks/useConnectionSocket';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { UserRoles } from '@/types/userRoles';

import EditPositionMarker from '../EditPositionMarker';
import TrashcanEditor from '../TrashcanEditor';
import TrashcanMarker from '../TrashcanMarker';
import { MapContainer } from './styles';

const defaultLocation: YMapLocationRequest = {
    center: [27.5947648, 53.9108842],
    zoom: 18,
};

const MainMap = () => {
    const ymapRef = useRef<YmapComponent>(null);
    const { setCoordinates, popupErrorMessage } = useAction();
    const isInEditingMode = useTypedSelector((state) => state.mapClick.isInEditingMode);
    const currentSection = useTypedSelector((state) => state.menuSection.section);
    const selectedTrashcan = useTypedSelector((state) => state.menuSection.trashcan);
    const userRole = useTypedSelector((state) => state.user.role);
    const [trashcans] = useConnectionSocket();

    useEffect(() => {
        if (!isInEditingMode && ymapRef.current) {
            const center = ymapRef.current.center;
            setCoordinates({ lng: center[0], lat: center[1] });
        }
    }, [isInEditingMode]);

    useEffect(() => {
        getAllTrashcans().catch((err) => popupErrorMessage(err.message));
    }, []);

    return (
        <MapContainer>
            <YMap ref={ymapRef} location={defaultLocation} theme="light">
                <YMapDefaultSchemeLayer />
                <YMapDefaultFeaturesLayer />
                {trashcans.map(
                    (trashcan) =>
                        (trashcan.id !== selectedTrashcan?.id || userRole !== UserRoles.Admin) && (
                            <TrashcanMarker key={trashcan.id} trashcan={trashcan} />
                        )
                )}
                {userRole === UserRoles.Admin && currentSection === TrashcanEditor && <EditPositionMarker />}
            </YMap>
        </MapContainer>
    );
};

export default MainMap;
