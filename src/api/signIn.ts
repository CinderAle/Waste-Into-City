import axios from 'axios';

import { API } from '@/constants/api';
import { User } from '@/types/user';
import { UserRoles } from '@/types/userRoles';

export const signIn = async (login: string, password: string): Promise<User> => {
    try {
        const userResponse = await axios.post<User>(API.AUTH_URI, {
            login,
            password,
        });
        return userResponse.data;
    } catch {
        return {
            login: '',
            role: UserRoles.Guest,
        };
    }
};
