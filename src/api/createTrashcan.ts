import { API } from '@/constants/api';
import { SOCKET_MESSAGES } from '@/constants/socketMessages';
import { TrashcanTypes } from '@/types/trashcanTypes';

import { fetchAuthorized } from './fetchAuthorized';

type TrashcanRequest = {
    volume: number;
    fill: number;
    type: TrashcanTypes;
    coordinates: {
        lat: number;
        lng: number;
    };
};

export const createTrashcan = async (trashcan: TrashcanRequest, image: File | undefined): Promise<boolean> => {
    try {
        const imageData: ArrayBuffer | undefined = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.result && typeof reader.result !== 'string') {
                    resolve(reader.result);
                }
            };
            if (image) {
                reader.readAsArrayBuffer(image);
            } else {
                resolve(undefined);
            }
        });
        await fetchAuthorized<TrashcanRequest | ArrayBuffer | undefined, void>(
            API.BACKEND_OPERATIONS_URI,
            SOCKET_MESSAGES.CREATE_TRASHCAN,
            trashcan,
            imageData
        );
        return true;
    } catch {
        return false;
    }
};
