import axios from 'axios';

import { API } from '@/constants/api';

export const signOut = async (): Promise<boolean> => {
    try {
        await axios.delete(API.AUTH_URI);
        return true;
    } catch {
        return false;
    }
};
