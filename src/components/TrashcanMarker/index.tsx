import { YMapMarker } from 'ymap3-components';

import { useAction } from '@/hooks/useAction';
import { Trashcan } from '@/types/trashcan';

type Props = {
    trashcan: Trashcan;
};

const TrashcanMarker = ({ trashcan }: Props) => {
    const { editTrashcan } = useAction();

    const handleMarkerClick = () => {
        editTrashcan(trashcan);
    };

    return (
        <YMapMarker coordinates={[trashcan.coordinates.lng, trashcan.coordinates.lat]} onClick={handleMarkerClick}>
            <h1>{trashcan.id}</h1>
        </YMapMarker>
    );
};

export default TrashcanMarker;
