import { API } from '@/constants/api';

export const createTrashcan = async (trashcan: FormData) => {
    const response = await fetch(API.BACKEND_OPERATIONS_URI, {
        method: API.POST_METHOD,
        body: trashcan,
    });
    return response.ok;
};
