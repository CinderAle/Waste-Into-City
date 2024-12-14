import { useEffect, useState } from 'react';

import { connectionSocket } from '@/api/connectionSocket';
import { SOCKET_MESSAGES } from '@/constants/socketMessages';
import { Trashcan } from '@/types/trashcan';

import { useAction } from './useAction';

type Response = any & {
    _id: string;
};

const castToTrashcan = (response: Response): Trashcan => {
    return { ...response, id: response._id };
};

export const useConnectionSocket = (): [Trashcan[], (trashcans: Trashcan[]) => void] => {
    const [trashcans, setTrashcans] = useState<Trashcan[]>([]);
    const { popupBasicMessage } = useAction();

    useEffect(() => {
        connectionSocket.connect();
        connectionSocket.on(SOCKET_MESSAGES.ADDED_TRASHCAN, (response: Response) => {
            setTrashcans((trashcans) => [...trashcans, castToTrashcan(response)]);
        });

        connectionSocket.on(SOCKET_MESSAGES.REMOVED_TRASHCAN, (response: Response) => {
            const { id } = castToTrashcan(response);
            setTrashcans((trashcans) => trashcans.filter((e) => e.id !== id));
        });

        connectionSocket.on(SOCKET_MESSAGES.MODIFIED_TRASHCAN, (response: Response) => {
            const trashcan = castToTrashcan(response);
            setTrashcans((trashcans) => trashcans.map((e) => (e.id === trashcan.id ? trashcan : e)));
        });

        connectionSocket.on(SOCKET_MESSAGES.LIST_TRASHCANS, (responses: Response[]) => {
            setTrashcans(responses.map((response) => castToTrashcan(response)));
            popupBasicMessage('All trashcans are listed!');
        });

        return () => {
            connectionSocket.disconnect();
        };
    }, []);

    return [trashcans, setTrashcans];
};
