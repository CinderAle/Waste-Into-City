import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

import { API } from '@/constants/api';

export const apolloClient = new ApolloClient({
    link: createHttpLink({
        uri: `${API.BACKEND_OPERATIONS_URI}/graphql`,
        credentials: 'include',
    }),
    cache: new InMemoryCache(),
});
