import axios from 'axios';

import { API } from '@/constants/api';
import { ApiRequestError } from '@/errors/apiRequestError';

axios.defaults.withCredentials = true;

export const fetchAuthorized = async <T, K>(
    uri: string,
    request: (uri: string, data: T) => Promise<K>,
    param: T
): Promise<K> => {
    try {
        const result: K = await request(uri, param);
        return result;
    } catch {
        try {
            await axios.put(API.AUTH_URI);
            const result = await request(uri, { ...param });
            return result;
        } catch {
            throw new ApiRequestError();
        }
    }
};
