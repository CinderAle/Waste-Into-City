import { io } from 'socket.io-client';

import { API } from '@/constants/api';
import { SOCKET_MESSAGES } from '@/constants/socketMessages';
import { ApiRequestError } from '@/errors/apiRequestError';
import { Trashcan } from '@/types/trashcan';

type Response = any & {
    _id: string;
};

// export const getAllTrashcans = async () => {
//     const trashcansResponse = await fetch(API.BACKEND_OPERATIONS_URI, {
//         headers: {
//             accept: 'application/json',
//         },
//     });
//     if (trashcansResponse.ok) {
//         const jsonTrashcans = await trashcansResponse.json();
//         return jsonTrashcans.map((trashcan: any) => {
//             return { ...trashcan, id: trashcan._id };
//         }) as Trashcan[];
//     } else {
//         throw new ApiRequestError();
//     }
// };

export const getAllTrashcans = async () => {
    const socket = io(API.BACKEND_OPERATIONS_URI);
    socket.emit(SOCKET_MESSAGES.GET_FILTERED_TRASHCANS);
    try {
        const response: Response[] = await new Promise((resolve, reject) => {
            socket.on(SOCKET_MESSAGES.SUCCESS, (response) => {
                resolve(response);
            });
            socket.on(SOCKET_MESSAGES.ERROR, (message) => {
                reject(message);
            });
        });
        return response.map((trashcan: Response) => ({ ...trashcan, id: trashcan._id })) as Trashcan[];
    } catch {
        throw new ApiRequestError();
    }
};
