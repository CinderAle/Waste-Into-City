import axios from 'axios';
import { io, Socket } from 'socket.io-client';

import { API } from '@/constants/api';
import { SOCKET_MESSAGES } from '@/constants/socketMessages';
import { ApiRequestError } from '@/errors/apiRequestError';

axios.defaults.withCredentials = true;

// export const fetchAuthorized = async <T, K>(
//     uri: string,
//     request: (uri: string, data: T) => Promise<K>,
//     param: T
// ): Promise<K> => {
//     try {
//         const result: K = await request(uri, param);
//         return result;
//     } catch {
//         try {
//             await axios.put(API.AUTH_URI);
//             const result = await request(uri, { ...param });
//             return result;
//         } catch {
//             throw new ApiRequestError();
//         }
//     }
// };

export const fetchAuthorized = async <T, K>(uri: string, message: string, ...data: T[]): Promise<K> => {
    const socket: Socket = io(uri, {
        withCredentials: true,
    });
    try {
        socket.emit(message, ...data);
        const result: K = await new Promise((resolve, reject) => {
            socket.on(SOCKET_MESSAGES.SUCCESS, (response: K) => resolve(response));
            socket.on(SOCKET_MESSAGES.AUTH_ERROR, (errorMessage: string) => reject(errorMessage));
            socket.on(SOCKET_MESSAGES.ERROR, (errorMessage: string) => reject(errorMessage));
        });
        return result;
    } catch {
        try {
            socket.disconnect();
            await axios.put(API.AUTH_URI);
            socket.connect();
            socket.emit(message, ...data);
            const result: K = await new Promise((resolve, reject) => {
                socket.on(SOCKET_MESSAGES.SUCCESS, (response: K) => resolve(response));
                socket.on(SOCKET_MESSAGES.AUTH_ERROR, (errorMessage: string) => reject(errorMessage));
                socket.on(SOCKET_MESSAGES.ERROR, (errorMessage: string) => reject(errorMessage));
            });
            return result;
        } catch {
            throw new ApiRequestError();
        }
    }
};
