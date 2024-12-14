import { SOCKET_MESSAGES } from '@/constants/socketMessages';
import { ApiRequestError } from '@/errors/apiRequestError';
import { TrashcanTypes } from '@/types/trashcanTypes';

import { fetchAuthorized } from './fetchAuthorized';

type TrashcanRequest = {
    id: string;
    volume: number;
    fill: number;
    type: TrashcanTypes;
    coordinates: {
        lat: number;
        lng: number;
    };
};

export const updateTrashcan = async (trashcan: TrashcanRequest, image: File | undefined) => {
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
            SOCKET_MESSAGES.UPDATE_TRASHCAN,
            trashcan,
            imageData
        );
    } catch {
        throw new ApiRequestError();
    }
};
