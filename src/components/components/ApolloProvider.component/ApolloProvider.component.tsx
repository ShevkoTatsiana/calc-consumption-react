import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

type Props = {
    children?: React.ReactNode;
};

const link = createHttpLink({
    uri: 'http://localhost:4000'
});

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
});

export function ApolloProviderComponent(props: Props) {
    const {
        children
    } = props;

    return !!client && (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    );
}
