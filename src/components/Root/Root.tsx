import React from 'react';
import {App} from '../App/App';

import {ApolloProviderComponent} from '../components/ApolloProvider.component/ApolloProvider.component';

export const Root: React.FunctionComponent = () => {
  return (
      <ApolloProviderComponent>
          <App/>
      </ApolloProviderComponent>
  );
}

export default Root;