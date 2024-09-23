import { MapClickAction, MapClickActionType, MapClickState } from '@/types/mapClick';

export const mapClickReducer = (state: MapClickState, action: MapClickAction): MapClickState => {
    switch (action.type) {
        case MapClickActionType.StartEditing:
            return { ...state, isInEditingMode: true };
        case MapClickActionType.SetClick:
            return { ...state, coordinates: action.payload };
        case MapClickActionType.StopEditing:
        default:
            return { ...state, isInEditingMode: false };
    }
};
