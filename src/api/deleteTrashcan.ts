import axios from 'axios';

import { API } from '@/constants/api';
import { Trashcan } from '@/types/trashcan';

import { fetchAuthorized } from './fetchAuthorized';

export const deleteTrashcan = async (trashcan: Trashcan) => {
    try {
        await fetchAuthorized(`${API.BACKEND_OPERATIONS_URI}/${trashcan.id}`, axios.delete, {});
        return true;
    } catch {
        return false;
    }
};
