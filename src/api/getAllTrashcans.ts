import { SOCKET_MESSAGES } from '@/constants/socketMessages';
import { ApiRequestError } from '@/errors/apiRequestError';
import { TrashcanFilter } from '@/types/trashcanFilter';

import { connectionSocket } from './connectionSocket';

export const getAllTrashcans = async (filter?: TrashcanFilter) => {
    try {
        connectionSocket.emit(SOCKET_MESSAGES.GET_FILTERED_TRASHCANS, filter);
    } catch {
        throw new ApiRequestError();
    }
};
