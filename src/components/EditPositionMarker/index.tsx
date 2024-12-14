import { YMapMarker } from 'ymap3-components';

import locationIcon from '@/assets/icons/svg/location.svg';
import { useTypedSelector } from '@/hooks/useTypedSelector';

import { Marker, MarkerContainer } from './styles';

const EditPositionMarker = () => {
    const isEditing = useTypedSelector((state) => state.mapClick.isInEditingMode);
    const location = useTypedSelector((state) => state.mapClick.coordinates);

    return isEditing ? (
        <MarkerContainer>
            <Marker src={locationIcon} />
        </MarkerContainer>
    ) : (
        <YMapMarker coordinates={[location.lng, location.lat]}>
            <Marker src={locationIcon} />
        </YMapMarker>
    );
};

export default EditPositionMarker;
