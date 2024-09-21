import { YMapMarker } from 'ymap3-components';

import { Trashcan } from '@/types/trashcan';

type Props = {
    trashcan: Trashcan;
};

const TrashcanMarker = ({ trashcan }: Props) => {
    return (
        <YMapMarker coordinates={[trashcan.coordinates.lng, trashcan.coordinates.lat]}>
            <h1>{trashcan.id}</h1>
        </YMapMarker>
    );
};

export default TrashcanMarker;
