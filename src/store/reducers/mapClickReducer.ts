import { MapClickAction, MapClickActionType, MapClickState } from '@/types/mapClick';

const initialState: MapClickState = {
    isInEditingMode: false,
    coordinates: {
        lat: 53.9108842,
        lng: 27.5947648,
    },
};

export const mapClickReducer = (state: MapClickState = initialState, action: MapClickAction): MapClickState => {
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
