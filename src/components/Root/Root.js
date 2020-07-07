import React from 'react';
import {App} from '../App/App';

import {ApolloProviderComponent} from '../components/ApolloProvider.component/ApolloProvider.component';

export function Root() {
  return (
      <ApolloProviderComponent>
          <App/>
      </ApolloProviderComponent>
  );
}

export default Root;