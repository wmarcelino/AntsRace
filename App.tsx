import {ApolloProvider} from '@apollo/client';
import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {lightTheme} from './src/global/theme';
import {apolloClient} from './src/integration/Apollo';
import {Home} from './src/screens/Home';

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={lightTheme}>
        <Home />
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
