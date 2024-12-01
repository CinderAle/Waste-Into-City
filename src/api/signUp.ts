import axios from 'axios';

import { API } from '@/constants/api';

export const signUp = async (login: string, password: string): Promise<boolean> => {
    try {
        await axios.post(API.SIGN_UP_URI, {
            login,
            password,
        });
        return true;
    } catch {
        return false;
    }
};
