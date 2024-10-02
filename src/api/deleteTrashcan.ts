import { API } from '@/constants/api';
import { ApiRequestError } from '@/errors/apiRequestError';
import { Trashcan } from '@/types/trashcan';

export const deleteTrashcan = async (trashcan: Trashcan) => {
    const response = await fetch(`${API.BACKEND_OPERATIONS_URI}/${trashcan.id}`, {
        method: API.DELETE_METHOD,
    });
    if (response.ok) {
        return true;
    }
    throw new ApiRequestError();
};
