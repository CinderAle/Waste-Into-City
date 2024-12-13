import { API } from '@/constants/api';
import { SOCKET_MESSAGES } from '@/constants/socketMessages';
import { Trashcan } from '@/types/trashcan';

import { fetchAuthorized } from './fetchAuthorized';

export const deleteTrashcan = async (trashcan: Trashcan) => {
    try {
        await fetchAuthorized(API.BACKEND_OPERATIONS_URI, SOCKET_MESSAGES.DELETE_TRASHCAN, trashcan.id);
        return true;
    } catch {
        return false;
    }
};
