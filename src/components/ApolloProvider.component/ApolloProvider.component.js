import React, {useEffect, useState} from 'react';
import {App} from '../App/App';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { persistCache } from 'apollo-cache-persist';

const link = createHttpLink({
    uri: 'http://localhost:4000'
});


function getClient(cache, link) {
    return new ApolloClient({
        cache,
        link
    });
}

export function ApolloProviderComponent(props) {
    const {
        children
    } = props;

    const [cache] = useState(() => new InMemoryCache());
    const [client, setClient] = useState();

    useEffect(() => {
        if (client) return;

        persistCache({
            cache,
            storage: window.localStorage,
            debounce: 0,
            maxSize: false,
            resolvers: {},
        }).then(() => setClient(getClient(cache, link)));
    }, [client]);

    return !!client && (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    );
}
