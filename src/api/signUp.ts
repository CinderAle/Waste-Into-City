import { gql } from '@apollo/client';

import { hashSHA256 } from '@/utils/hashSHA256';

import { apolloClient } from './apolloClient';

const signUpMutation = gql`
    mutation createUser($input: UserInput) {
        createUser(input: $input)
    }
`;

export const signUp = async (login: string, password: string): Promise<boolean> => {
    try {
        const passwordHash = await hashSHA256(password);
        await apolloClient.mutate({
            mutation: signUpMutation,
            variables: { input: { login, password: passwordHash } },
        });
        return true;
    } catch {
        return false;
    }
};
