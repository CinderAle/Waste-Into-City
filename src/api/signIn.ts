import axios from 'axios';

import { API } from '@/constants/api';
import { User } from '@/types/user';
import { UserRoles } from '@/types/userRoles';
import { hashSHA256 } from '@/utils/hashSHA256';

export const signIn = async (login: string, password: string): Promise<User> => {
    try {
        const passwordHash = await hashSHA256(password);
        const userResponse = await axios.post<User>(API.AUTH_URI, {
            login,
            password: passwordHash,
        });
        return userResponse.data;
    } catch {
        return {
            login: '',
            role: UserRoles.Guest,
        };
    }
};
