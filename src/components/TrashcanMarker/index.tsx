import { YMapMarker } from 'ymap3-components';

import { useAction } from '@/hooks/useAction';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { Trashcan } from '@/types/trashcan';

import { FocusedTrashcanMarkerCircle, TrashcanMarkerCircle } from './styles';

type Props = {
    trashcan: Trashcan;
};

const TrashcanMarker = ({ trashcan }: Props) => {
    const { editTrashcan } = useAction();
    const selectedTrashcan = useTypedSelector((state) => state.menuSection.trashcan);

    const handleMarkerClick = () => {
        editTrashcan(trashcan);
    };

    return (
        <YMapMarker coordinates={[trashcan.coordinates.lng, trashcan.coordinates.lat]} onClick={handleMarkerClick}>
            {selectedTrashcan && selectedTrashcan.id === trashcan.id ? (
                <FocusedTrashcanMarkerCircle />
            ) : (
                <TrashcanMarkerCircle />
            )}
        </YMapMarker>
    );
};

export default TrashcanMarker;
