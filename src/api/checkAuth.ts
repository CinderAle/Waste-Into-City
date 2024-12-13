import { gql } from '@apollo/client';

import { apolloClient } from './apolloClient';

const checkTokenQuery = gql`
    query {
        checkToken
    }
`;

export const checkAuth = async (): Promise<boolean> => {
    try {
        const result = await apolloClient.query<boolean>({ query: checkTokenQuery });
        return Boolean(result.data);
    } catch {
        return false;
    }
};
