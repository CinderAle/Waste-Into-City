import { gql } from '@apollo/client';

import { User } from '@/types/user';
import { UserRoles } from '@/types/userRoles';
import { hashSHA256 } from '@/utils/hashSHA256';

import { apolloClient } from './apolloClient';
import { connectionSocket } from './connectionSocket';

const signInMutation = gql`
    mutation getUser($input: UserInput!) {
        getUser(input: $input) {
            login
            role
        }
    }
`;

export const signIn = async (login: string, password: string): Promise<User> => {
    try {
        const passwordHash = await hashSHA256(password);
        connectionSocket.disconnect();
        const userResponse = await apolloClient.mutate({
            mutation: signInMutation,
            variables: { input: { login, password: passwordHash } },
        });
        connectionSocket.connect();
        return userResponse.data.getUser;
    } catch {
        return {
            login: '',
            role: UserRoles.Guest,
        };
    }
};
