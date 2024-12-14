import { TrashcanTypes } from './trashcanTypes';

export type TrashcanFilter = {
    type?: TrashcanTypes[];
    volume?: {
        $gt?: number;
        $lt?: number;
    };
    fill?: {
        $gt?: number;
        $lt?: number;
    };
};
