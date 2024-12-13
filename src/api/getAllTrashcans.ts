import { SOCKET_MESSAGES } from '@/constants/socketMessages';
import { ApiRequestError } from '@/errors/apiRequestError';

import { connectionSocket } from './connectionSocket';

export const getAllTrashcans = async () => {
    try {
        connectionSocket.emit(SOCKET_MESSAGES.GET_FILTERED_TRASHCANS);
    } catch {
        throw new ApiRequestError();
    }
};
