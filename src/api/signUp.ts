import axios from 'axios';

import { API } from '@/constants/api';
import { hashSHA256 } from '@/utils/hashSHA256';

export const signUp = async (login: string, password: string): Promise<boolean> => {
    try {
        const passwordHash = await hashSHA256(password);
        await axios.post(API.SIGN_UP_URI, {
            login,
            password: passwordHash,
        });
        return true;
    } catch {
        return false;
    }
};
