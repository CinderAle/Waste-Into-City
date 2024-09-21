import { Coordinates } from '@/types/coordinates';

import { TrashcanTypes } from './trashcanTypes';

export class Trashcan {
    private _id: string;
    private _coordinates: Coordinates;
    private _type: TrashcanTypes;
    private _volume: number;
    private _fill: number;
    private _image: string;

    constructor(
        id: string,
        coordinates: Coordinates,
        type: TrashcanTypes,
        volume: number,
        fill: number = 0,
        image: string = ''
    ) {
        this._id = id;
        this._coordinates = coordinates;
        this._type = type;
        this._volume = volume;
        this._fill = fill;
        this._image = image;
    }

    get id() {
        return this._id;
    }

    get coordinates() {
        return this._coordinates;
    }

    get type() {
        return this._type;
    }

    get volume() {
        return this._volume;
    }

    get fill() {
        return this._fill;
    }

    set fill(fill: number) {
        this._fill = fill;
    }

    get image() {
        return this._image;
    }
}
