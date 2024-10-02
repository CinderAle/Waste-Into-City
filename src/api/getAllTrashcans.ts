import { API } from '@/constants/api';
import { ApiRequestError } from '@/errors/apiRequestError';
import { Trashcan } from '@/types/trashcan';

export const getAllTrashcans = async () => {
    const trashcansResponse = await fetch(API.BACKEND_OPERATIONS_URI, {
        headers: {
            accept: 'application/json',
        },
    });
    if (trashcansResponse.ok) {
        const jsonTrashcans = await trashcansResponse.json();
        return jsonTrashcans.map((trashcan: any) => {
            return { ...trashcan, id: trashcan._id };
        }) as Trashcan[];
    } else {
        throw new ApiRequestError();
    }
};
