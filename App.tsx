import {ApolloProvider} from '@apollo/client';
import React from 'react';
import {apolloClient} from './src/integration/Apollo';
import {Home} from './src/screens/Home';

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <Home />
    </ApolloProvider>
  );
};

export default App;
