import axios from 'axios';

import { API } from '@/constants/api';

export const refreshTokens = async (): Promise<boolean> => {
    try {
        await axios.put(API.AUTH_URI);
        return true;
    } catch {
        return false;
    }
};
