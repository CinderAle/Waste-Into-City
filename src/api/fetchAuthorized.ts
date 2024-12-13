import { SOCKET_MESSAGES } from '@/constants/socketMessages';
import { ApiRequestError } from '@/errors/apiRequestError';

import { connectionSocket } from './connectionSocket';
import { refreshTokens } from './refreshTokens';

export const fetchAuthorized = async <T, K>(message: string, ...data: T[]): Promise<K> => {
    try {
        connectionSocket.emit(message, ...data);
        const result: K = await new Promise((_, reject) => {
            connectionSocket.off(SOCKET_MESSAGES.AUTH_ERROR);
            connectionSocket.on(SOCKET_MESSAGES.AUTH_ERROR, (errorMessage: string) => reject(errorMessage));
        });
        return result;
    } catch (e: unknown) {
        console.log((e as Error).message);
        try {
            connectionSocket.disconnect();
            await refreshTokens();
            connectionSocket.connect();
            connectionSocket.emit(message, ...data);
            const result: K = await new Promise((_, reject) => {
                connectionSocket.off(SOCKET_MESSAGES.AUTH_ERROR);
                connectionSocket.on(SOCKET_MESSAGES.AUTH_ERROR, (errorMessage: string) => reject(errorMessage));
            });
            return result;
        } catch {
            throw new ApiRequestError();
        }
    } finally {
        connectionSocket.off(SOCKET_MESSAGES.AUTH_ERROR);
    }
};
