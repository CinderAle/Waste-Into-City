import { UserRoles } from './userRoles';

export type User = {
    login: string;
    role: UserRoles;
};
