import { gql } from '@apollo/client';

import { apolloClient } from './apolloClient';

const refreshTokensQuery = gql`
    query {
        updateToken
    }
`;

export const refreshTokens = async (): Promise<boolean> => {
    try {
        await apolloClient.query({ query: refreshTokensQuery });
        return true;
    } catch {
        return false;
    }
};
