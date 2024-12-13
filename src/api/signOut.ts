import { gql } from '@apollo/client';

import { apolloClient } from './apolloClient';

const signInQuery = gql`
    query {
        logOut
    }
`;

export const signOut = async (): Promise<boolean> => {
    try {
        await apolloClient.query({ query: signInQuery });
        return true;
    } catch {
        return false;
    }
};
