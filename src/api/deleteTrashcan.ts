import { SOCKET_MESSAGES } from '@/constants/socketMessages';
import { ApiRequestError } from '@/errors/apiRequestError';
import { Trashcan } from '@/types/trashcan';

import { fetchAuthorized } from './fetchAuthorized';

export const deleteTrashcan = async (trashcan: Trashcan) => {
    try {
        await fetchAuthorized(SOCKET_MESSAGES.DELETE_TRASHCAN, trashcan.id);
    } catch {
        throw new ApiRequestError();
    }
};
