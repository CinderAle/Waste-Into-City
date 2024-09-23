import { Coordinates } from './coordinates';

export type MapClick = {
    coordinates: Coordinates;
    isInEditingMode: boolean;
};

export type MapClickState = MapClick;

export enum MapClickActionType {
    StartEditing = 'StartEditing',
    StopEditing = 'StopEditing',
    SetClick = 'SetClick',
}

type MapStartEditing = {
    type: MapClickActionType.StartEditing;
};

type MapStopEditing = {
    type: MapClickActionType.StopEditing;
};

type MapSetClick = {
    type: MapClickActionType.SetClick;
    payload: Coordinates;
};

export type MapClickAction = MapStartEditing | MapStopEditing | MapSetClick;
