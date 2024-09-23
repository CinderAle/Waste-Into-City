import { YMapMarker } from 'ymap3-components';

import { useTypedSelector } from '@/hooks/useTypedSelector';

import { Marker, MarkerContainer } from './styles';

const EditPositionMarker = () => {
    const isEditing = useTypedSelector((state) => state.mapClick.isInEditingMode);
    const location = useTypedSelector((state) => state.mapClick.coordinates);

    return isEditing ? (
        <MarkerContainer>
            <Marker />
        </MarkerContainer>
    ) : (
        <YMapMarker coordinates={[location.lng, location.lat]}>
            <Marker />
        </YMapMarker>
    );
};

export default EditPositionMarker;
