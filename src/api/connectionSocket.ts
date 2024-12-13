import { io } from 'socket.io-client';

import { API } from '@/constants/api';

export const connectionSocket = io(API.BACKEND_OPERATIONS_URI, { withCredentials: true });
