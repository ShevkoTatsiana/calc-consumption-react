import React, {useEffect, useState} from 'react';
import {App} from '../App/App';

import {ApolloProviderComponent} from '../ApolloProvider.component/ApolloProvider.component';

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

export function Root() {
  // const [cache] = useState(() => new InMemoryCache());
  // const [client, setClient] = useState(() => {
  //   return getClient(cache, link);
  // });
  //
  // useEffect(() => {
  //   if (client) return;
  //
  //   persistCache({
  //     cache,
  //     storage: window.localStorage,
  //     debounce: 0,
  //     maxSize: false
  //   }).then(() => setClient(getClient(cache, link)));
  // }, [client]);

  return (
      <ApolloProviderComponent>
          <App/>
      </ApolloProviderComponent>
  );
}

export default Root;