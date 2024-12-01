import axios from 'axios';

import { API } from '@/constants/api';

import { fetchAuthorized } from './fetchAuthorized';

export const createTrashcan = async (trashcan: FormData): Promise<boolean> => {
    try {
        await fetchAuthorized<FormData, boolean>(API.BACKEND_OPERATIONS_URI, axios.post, trashcan);
        return true;
    } catch {
        return false;
    }
};
