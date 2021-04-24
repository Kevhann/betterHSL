import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { Provider } from 'react-redux';
import store from './store';
import { App } from './app';

import { ApolloClient } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';

import { split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';

import * as config from './config';

console.log('config:', config);
// Create a WebSocket link:
const wsLink = new WebSocketLink({
  uri: config.WSPORT,
  options: {
    reconnect: false
  }
});

const httpLink = createHttpLink({
  uri: config.PORT
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('app-user-token');
  return {
    headers: {
      ...headers,
      authorization: token ? `bearer ${token}` : null
    }
  };
});

const link = split(
  ({ query, operationName }) => {
    const { kind } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operationName === 'subscription';
  },
  wsLink,
  authLink.concat(httpLink)
);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloHooksProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
