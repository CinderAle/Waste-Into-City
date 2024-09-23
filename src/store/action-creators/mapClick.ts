import { Dispatch } from 'redux';

import { Coordinates } from '@/types/coordinates';
import { MapClickAction, MapClickActionType } from '@/types/mapClick';

export const startCoordinatesEditing = () => {
    return (dispatch: Dispatch<MapClickAction>) => {
        dispatch({ type: MapClickActionType.StartEditing });
    };
};

export const stopCoordinatesEditing = () => {
    return (dispatch: Dispatch<MapClickAction>) => {
        dispatch({ type: MapClickActionType.StopEditing });
    };
};

export const setCoordinates = (coordinates: Coordinates) => {
    return (dispatch: Dispatch<MapClickAction>) => {
        dispatch({ type: MapClickActionType.SetClick, payload: coordinates });
    };
};
